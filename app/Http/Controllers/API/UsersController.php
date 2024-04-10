<?php

namespace App\Http\Controllers\API;

use App\Models\Users;
use App\Http\Resources\PostResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
  public function index()
  {
    $posts = Users::latest()->paginate(5);

    return new PostResource(true, 'List Data Users', $posts);
  }
  public function store(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'username' => 'required',
      'email' => 'required|email',
      'password' => 'required',
      'profile_pict' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 422);
    }

        $password = $request->password;
        $hashedPassword = Hash::make($password);
        if($request->hasFile('image')){
            $image = $request->file('image');
            $image->storeAs('public/posts',$image->hashName());
            $post=Users::create([
                'username'      => $request->username,
                'email'         => $request->email,
                'password'      => $hashedPassword,
                'profile_pict'  => $image->hashName(),
                'balance'       => $request->balance ?? 0,
                'point'         => $request->point ?? 0,
            ]);
        }
        else{
            $post=Users::create([
                'username'      => $request->username,
                'email'         => $request->email,
                'password'      => $hashedPassword,
                'balance'       => $request->balance ?? 0,
                'point'         => $request->point ?? 0,
            ]);
        }
        return new PostResource(true, 'Insert user Success!', $post);
    }
    public function update(Request $request,$id){
        $validator = Validator::make($request->all(),[
            'username'      => 'required',
            'email'         => 'required|email',
            'profile_pict'  => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(),442);
        }
        $post = Users::find($id);
        if($request->hasFile('image')){
            $image = $request->file('image');
            $image->storeAs('public/posts',$image->hashName());

      Storage::delete('public/posts/' . basename($post->image));

            $post->update([
                'username'      => $request->username,
                'email'         => $request->email,
                'profile_pict'  => $image->hashName(),
            ]);
        }
        else{
            $post->update([
                'username'      => $request->username,
                'email'         => $request->email,
            ]);
        }
        return new PostResource(true, 'Updated!', $post);
    }
    public function show($id){
        $user = Users::find($id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
        return response()->json($user, 200);
    }
    public function updatePassword(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'password_lama' => 'required',
            'password_baru' => 'required|min:8',
            'konfirmasi_password_baru' => 'required|same:password_baru', 
        ]);
    
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 422);
        }
    
        $user = Users::find($id);
    
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
    
        if (!Hash::check($request->password_lama, $user->password)) {
            return response()->json(['error' => 'Password lama tidak sesuai'], 400);
        }
    
        // Update password baru
        $user->password = Hash::make($request->password_baru);
        $user->save();
    
        return response()->json(['message' => 'Password berhasil diubah'], 200);
    }
}
