<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Rewards extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'category',
        'pict',
        'desc',
        'price',
        'stock',
    ];

    protected function rewardPict(): Attribute{
        return Attribute::make(
            get: fn ($rewardPict)=>url('/storage/rewards/' .$rewardPict),
        );
    }
}
