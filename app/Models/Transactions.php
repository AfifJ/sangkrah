<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Transactions extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'icon',
        'trash_type',
        'trash_amount',
        'total',
        'point_obtain',
        'desc',
        'payment_method',
        'status',
        'user_id',
        'partner_id',
    ];

    protected function icon(): Attribute{
        return Attribute::make(
            get: fn ($icon)=>url('/storage/transactions/icon/' .$icon),
        );
    }
}
