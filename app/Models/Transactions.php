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
        'trash_type',
        'trash_amount',
        'total',
        'delivery_method',
        'point_obtain',
        'desc',
        'payment_method',
        'status',
        'user_id',
        'partner_id',
    ];
}
