<?php

namespace App\Http\Controllers\API;

use App\Models\Transactions;
use App\Http\Resources\PostResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class TransactionsController extends Controller
{
    public function index()
    {
        $posts = Transactions::latest()->paginate(5);

        return new PostResource(true, 'List Data transaksi', $posts);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'title'         => 'required',
            'icon'          => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'trash_type'    => 'required',
            'trash_amount'  => 'required',
            'total'         => 'required',
            'point_obtain'  => 'required',
            'desc'          => 'required',
            'payment_method'=> 'required',
            'status'        => 'required',
            'user_id'       => 'required',
            'partner_id'    => 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        $image = $request->file('icon');
        $image->storeAs('public/transaction', $image->hashName());

        $post = Transactions::create([
            'title'         => $request->title,
            'icon'          => $image->hashName(),
            'trash_type'    => $request->trash_type,
            'trash_amount'  => $request->trash_amount,
            'total'         => $request->total,
            'point_obtain'  => $request->point_obtain,
            'desc'          => $request->desc,
            'payment_method'=> $request->payment_method,
            'status'        => $request->status,
            'user_id'       => $request->user_id,
            'partner_id'    => $request->partner_id,
        ]);
        return new PostResource(true, 'Insert transaction Success!', $post);
    }
    public function update(Request $request,$id){
        $validator = Validator::make($request->all(),[
            'title'         => 'required',
            'icon'          => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'trash_type'    => 'required',
            'trash_amount'  => 'required',
            'total'         => 'required',
            'point_obtain'  => 'required',
            'desc'          => 'required',
            'payment_method'=> 'required',
            'status'        => 'required',
            'user_id'       => 'required',
            'partner_id'    => 'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(),442);
        }
        $post = Transactions::find($id);
        $post->update([
            'title'         => $request->title,
            'trash_type'    => $request->trash_type,
            'trash_amount'  => $request->trash_amount,
            'total'         => $request->total,
            'point_obtain'  => $request->point_obtain,
            'desc'          => $request->desc,
            'payment_method'=> $request->payment_method,
            'status'        => $request->status,
            'user_id'       => $request->user_id,
            'partner_id'    => $request->partner_id,
        ]);
        return new PostResource(true, 'Updated!', $post);
    }
    public function show($id){
        $transaction = Transactions::find($id);
        if (!$transaction) {
            return response()->json(['message' => 'transaction not found'], 404);
        }
        return response()->json($transaction, 200);
    }
}
