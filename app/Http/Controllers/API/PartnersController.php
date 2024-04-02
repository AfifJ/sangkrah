<?php

namespace App\Http\Controllers\API;

use App\Models\Partners;
use App\Http\Resources\PostResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PartnersController extends Controller
{
    public function index()
    {
        $posts = Partners::latest()->paginate(5);

        return new PostResource(true, 'List Data Partners', $posts);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'name'          => 'required',
            'email'         => 'required|email',
            'password'      => 'required',
            'phone'         => 'required',
            'logo'          => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'pict'          => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'service'       => 'required',
            'desc'          => 'nullable',
            'province'      => 'required',
            'kabupaten'     => 'required',
            'kecamatan'     => 'required',
            'kelurahan'     => 'required',
            'address_detail'=> 'required',
            'coordinate'    => 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $logo = $request->file('logo');
        $pict = $request->file('pict');
        $logo->storeAs('public/Partners/logo', $logo->hashName());
        $pict->storeAs('public/Partners/pict', $pict->hashName());

        $post = Partners::create([
            'name'          => $request->name,
            'email'         => $request->email,
            'password'      => $request->password,
            'phone'         => $request->phone,
            'logo'          => $logo->hashName(),
            'balance'       => $request->balance ?? 0,
            'point'         => $request->point ?? 0,
            'pict'          => $pict->hashName(),
            'service'       => $request->service,
            'desc'          => $request->desc ?? '',
            'province'      => $request->province,
            'kabupaten'     => $request->kabupaten,
            'kecamatan'     => $request->kecamatan,
            'kelurahan'     => $request->kelurahan,
            'address_detail'=> $request->address_detail,
            'coordinate'    => $request->coordinate,
        ]);
        return new PostResource(true, 'Insert Partner Success!', $post);
    }
    public function update(Request $request,$id){
        $validator = Validator::make($request->all(),[
            'name'          => 'required',
            'email'         => 'required|email',
            'password'      => 'required',
            'phone'         => 'required',
            'logo'          => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'pict'          => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'service'       => 'required',
            'desc'          => 'nullable',
            'province'      => 'required',
            'kabupaten'     => 'required',
            'kecamatan'     => 'required',
            'kelurahan'     => 'required',
            'address_detail'=> 'required',
            'coordinate'    => 'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(),442);
        }
        $post = Partners::find($id);
        if (!$post) {
            return response()->json(['message' => 'Partner not found'], 404);
        }
        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $logo->storeAs('public/partners/logo', $logo->hashName());
            Storage::delete('public/partners/logo/' . basename($post->logo));
            $post->logo = $logo->hashName();
        }
    
        if ($request->hasFile('pict')) {
            $pict = $request->file('pict');
            $pict->storeAs('public/partners/pict', $pict->hashName());
            Storage::delete('public/partners/pict/' . basename($post->pict));
            $post->pict = $pict->hashName();
        }
    
        $post->update([
            'name'          => $request->name,
            'email'         => $request->email,
            'password'      => $request->password,
            'phone'         => $request->phone,
            'balance'       => $request->balance ?? 0,
            'point'         => $request->point ?? 0,
            'service'       => $request->service,
            'desc'          => $request->desc ?? '',
            'province'      => $request->province,
            'kabupaten'     => $request->kabupaten,
            'kecamatan'     => $request->kecamatan,
            'kelurahan'     => $request->kelurahan,
            'address_detail'=> $request->address_detail,
            'coordinate'    => $request->coordinate,
        ]);
        return new PostResource(true, 'Updated!', $post);
    }
    public function show($id){
        $post = Partners::find($id);
        
        return new PostResource(true, 'Data detail!', $post);
    }
}
