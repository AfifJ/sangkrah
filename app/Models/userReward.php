<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userReward extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'reward_id',
    ];
}
