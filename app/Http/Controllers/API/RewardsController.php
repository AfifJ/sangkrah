<?php

namespace App\Http\Controllers\API;

use App\Models\Rewards;
use App\Http\Resources\PostResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class RewardsController extends Controller
{
    public function index()
    {
        $posts = Rewards::latest()->paginate(5);

        return new PostResource(true, 'List Data transaksi', $posts);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'title'         => 'required',
            'category'      => 'required',
            'pict'          => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'desc'          => 'required',
            'price'         => 'required',
            'stock'         => 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $image = $request->file('pict');
        $image->storeAs('public/Reward', $image->hashName());

        $post = Rewards::create([
            'title'         => $request->title,
            'category'      => $request->category,
            'pict'          => $image->hashName(),
            'desc'          => $request->desc,
            'price'         => $request->price,
            'stock'         => $request->stock,
        ]);
        return new PostResource(true, 'Insert Reward Success!', $post);
    }
    public function update(Request $request,$id){
        $validator = Validator::make($request->all(),[
            'title'         => 'required',
            'category'      => 'required',
            'pict'          => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'desc'          => 'required',
            'price'         => 'required',
            'stock'         => 'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(),442);
        }
        $post = Rewards::find($id);
        if($request->hasFile('pict')){
            $image = $request->file('pict');
            $image->storeAs('public/rewards',$image->hashName());
            Storage::delete('public/rewards/' .basename($post->image));
            $post->update([
                'title'         => $request->title,
                'category'      => $request->category,
                'pict'          => $image->hashName(),
                'desc'          => $request->desc,
                'price'         => $request->price,
                'stock'         => $request->stock,
            ]);
        }
        else{
            $post->update([
                'title'         => $request->title,
                'category'      => $request->category,
                'desc'          => $request->desc,
                'price'         => $request->price,
                'stock'         => $request->stock,
            ]);
        }
        return new PostResource(true, 'Updated!', $post);
    }
    public function show($id){
        $Reward = Rewards::find($id);
        if (!$Reward) {
            return response()->json(['message' => 'Reward not found'], 404);
        }
        return response()->json($Reward, 200);
    }
}
