<?php

namespace App\Http\Controllers\API;

use App\Models\Transactions;
use App\Models\Users;
use App\Models\Partners;
use App\Http\Resources\PostResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class TransactionsController extends Controller
{
    public function index(Request $request)
    {
        $user_id = $request->input('user_id'); // Ambil user_id dari request
        $transactions = Transactions::where('user_id', $user_id)->latest()->paginate(5000);

        return new PostResource(true, 'List Data Transaksi', $transactions);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'title'             => 'required',
            'trash_type'        => 'required',
            'trash_amount'      => 'required',
            'total'             => 'required',
            'delivery_method'   => 'required',
            'point_obtain'      => 'required',
            'desc'              => 'nullable',
            'payment_method'    => 'required',
            'status'            => 'required',
            'user_id'           => 'required',
            'partner_id'        => 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
        $user = Users::find($request->user_id);
        $partner = Partners::find($request->partner_id);
        if(!$user){
            return response()->json([
                'success' => false,
                'message' => 'Pengguna tidak ditemukan.',
            ], 404);
        }
        if(!$partner){
            return response()->json([
                'success' => false,
                'message' => 'Mitra tidak ditemukan.',
            ], 404);
        }
        if($user->balance < $request->total){
            return response()->json([
                'success' => false,
                'message' => 'Saldo kurang!',
            ], 404);
        }
        $post = Transactions::create([
            'title'             => $request->title,
            'trash_type'        => $request->trash_type,
            'trash_amount'      => $request->trash_amount,
            'total'             => $request->total,
            'delivery_method'   => $request->delivery_method,
            'point_obtain'      => $request->point_obtain,
            'desc'              => $request->desc,
            'payment_method'    => $request->payment_method,
            'status'            => $request->status,
            'user_id'           => $request->user_id,
            'partner_id'        => $request->partner_id,
        ]);

        $user->balance -= $request->total;
        $user->save();
        $partner->balance += $request->total;
        $partner->save();

        return new PostResource(true, 'Insert transaction Success!', $post);
    }
    public function update(Request $request,$id){
        $validator = Validator::make($request->all(),[
            'title'         => 'required',
            'trash_type'    => 'required',
            'trash_amount'  => 'required',
            'total'         => 'required',
            'delivery_method'=> 'required',
            'point_obtain'  => 'required',
            'desc'          => 'nullable',
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
            'delivery_method'=> $request->delivery_method,
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
