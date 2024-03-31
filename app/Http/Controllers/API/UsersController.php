<?php

namespace App\Http\Controllers\API;

use App\Models\Users;
use App\Http\Resources\PostResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    public function index()
    {
        $posts = Users::latest()->paginate(5);

        return new PostResource(true, 'List Data Users', $posts);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'username'      => 'required',
            'fullname'      => 'required',
            'email'         => 'required|email',
            'password'      => 'required',
            'phone'         => 'required',
            'birth_date'    => 'required|date',
            'profile_pict'  => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'province'      => 'required',
            'kabupaten'     => 'required',
            'kecamatan'     => 'required',
            'kelurahan'     => 'required',
            'detail'        => 'required',
            'coordinate'    => 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $image = $request->file('profile_pict');
        $image->storeAs('public/users', $image->hashName());

        $post = Users::create([
            'username'      => $request->username,
            'fullname'      => $request->fullname,
            'email'         => $request->email,
            'password'      => $request->password,
            'phone'         => $request->phone,
            'birth_date'    => $request->birth_date,
            'profile_pict'  => $image->hashName(),
            'balance'       => $request->balance ?? 0,
            'point'         => $request->point ?? 0,
            'province'      => $request->province,
            'kabupaten'     => $request->kabupaten,
            'kecamatan'     => $request->kecamatan,
            'kelurahan'     => $request->kelurahan,
            'detail'        => $request->detail,
            'coordinate'    => $request->coordinate,
        ]);
        return new PostResource(true, 'Insert user Success!', $post);
    }
    public function update(Request $request,$id){
        $validator = Validator::make($request->all(),[
            'username'      => 'required',
            'fullname'      => 'required',
            'email'         => 'required|email',
            'password'      => 'required',
            'phone'         => 'required',
            'birth_date'    => 'required|date',
            'profile_pict'  => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'balance'       => 'required',
            'point'         => 'required',
            'province'      => 'required',
            'kabupaten'     => 'required',
            'kecamatan'     => 'required',
            'kelurahan'     => 'required',
            'detail'        => 'required',
            'coordinate'    => 'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(),442);
        }
        $post = Users::find($id);
        if($request->hasFile('image')){
            $image = $request->file('image');
            $image->storeAs('public/posts',$image->hashName());

            Storage::delete('public/posts/' .basename($post->image));

            $post->update([
                'username'      => $request->username,
                'fullname'      => $request->fullname,
                'email'         => $request->email,
                'password'      => $request->password,
                'phone'         => $request->phone,
                'birth_date'    => $request->birth_date,
                'profile_pict'  => $image->hashName(),
                'balance'       => $request->balance,
                'point'         => $request->point,
                'province'      => $request->province,
                'kabupaten'     => $request->kabupaten,
                'kecamatan'     => $request->kecamatan,
                'kelurahan'     => $request->kelurahan,
                'detail'        => $request->detail,
                'coordinate'    => $request->coordinate,
            ]);
        }
        else{
            $post->update([
                'username'      => $request->username,
                'fullname'      => $request->fullname,
                'email'         => $request->email,
                'password'      => $request->password,
                'phone'         => $request->phone,
                'birth_date'    => $request->birth_date,
                'balance'       => $request->balance,
                'point'         => $request->point,
                'province'      => $request->province,
                'kabupaten'     => $request->kabupaten,
                'kecamatan'     => $request->kecamatan,
                'kelurahan'     => $request->kelurahan,
                'detail'        => $request->detail,
                'coordinate'    => $request->coordinate,
            ]);
        }
        return new PostResource(true, 'Updated!', $post);
    }
    public function show($id){
        $post = Users::find($id);
        
        return new PostResource(true, 'Data detail!', $post);
    }
}
