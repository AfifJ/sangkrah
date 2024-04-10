<?php

namespace App\Http\Controllers\API;

use App\Models\Inbox;
use App\Http\Resources\PostResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class InboxController extends Controller
{
    public function index()
    {
        $posts = Inbox::latest()->paginate(5);

        return new PostResource(true, 'List Data Inbox', $posts);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'content'       => 'required',
            'type'          => 'required',
            'user_id'       => 'required',
            'partner_id'    => 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $post = Inbox::create([
            'content'       => $request->content,
            'type'          => $request->type,
            'read_status'   => false,
            'user_id'       => $request->user_id,
            'partner_id'    => $request->partner_id,
        ]);
        return new PostResource(true, 'Insert user Success!', $post);
    }
    public function show($id){
        $post = Inbox::find($id);
        
        return new PostResource(true, 'Data detail!', $post);
    }
}
