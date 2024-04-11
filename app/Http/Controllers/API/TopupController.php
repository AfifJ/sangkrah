<?php

namespace App\Http\Controllers\API;

use App\Models\Topup;
use App\Models\Users;
use App\Http\Resources\PostResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TopupController extends Controller
{
    public function index()
    {
        $posts = Topup::latest();

        return new PostResource(true, 'List Data Topup', $posts);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'method'        => 'required',
            'nominal'       => 'required',
            'user_id'       => 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
        $user = Users::find($request->user_id);
        if(!$user){
            return response()->json([
                'success' => false,
                'message' => 'Pengguna tidak ditemukan.',
            ], 404);
        }

        $post = Topup::create([
            'method'        => $request->method,
            'nominal'       => $request->nominal,
            'user_id'       => $request->user_id,
        ]);

        $user->balance += $request->nominal;
        $user->save();

        return new PostResource(true, 'Insert user Success!', $post);
    }
    public function show($id){
        $post = Topup::find($id);
        
        return new PostResource(true, 'Data detail!', $post);
    }
}
