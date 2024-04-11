<?php

namespace App\Http\Controllers\API;

use App\Models\Rewards;
use App\Models\userReward;
use App\Models\Users;
use App\Http\Resources\PostResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class userRewardController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->user()->id;

        // Ambil data userReward yang terkait dengan pengguna yang sedang login
        $userRewards = userReward::where('user_id', $userId)->latest()->get();
    
        return new PostResource(true, 'List Data userReward', $userRewards);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'reward_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Ambil data pengguna dan hadiah
        $user = Users::find($request->user_id);
        $reward = Rewards::find($request->reward_id);

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'Pengguna tidak ditemukan.',
            ], 404);
        }

        if (!$reward) {
            return response()->json([
                'success' => false,
                'message' => 'Hadiah tidak ditemukan.',
            ], 404);
        }

        // Periksa apakah poin pengguna mencukupi
        if ($user->point >= $reward->price && $reward->stock > 0) {
            // Kurangi poin pengguna
            $user->point -= $reward->price;
            $user->save();

            // Buat entri baru pada tabel UserReward
            $userReward = UserReward::create([
                'user_id' => $request->user_id,
                'reward_id' => $request->reward_id,
            ]);

            // Kurangi stok hadiah
            $reward->stock -= 1;
            $reward->save();

            return response()->json([
                'success' => true,
                'message' => 'Voucher telah ditukarkan.',
                'data' => $userReward,
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Poin tidak mencukupi atau stok hadiah habis.',
            ], 422);
        }
    }
    public function show($id){
        $post = userReward::find($id);
        
        return new PostResource(true, 'Data detail!', $post);
    }
}
