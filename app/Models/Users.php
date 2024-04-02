<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;

    protected $fillable = [
        'username',
        'fullname',
        'email',
        'password',
        'phone',
        'birth_date',
        'profile_pict',
        'balance',
        'point',
        'province',
        'kabupaten',
        'kecamatan',
        'kelurahan',
        'detail',
        'coordinate',
    ];

    protected function userimg(): Attribute{
        return Attribute::make(
            get: fn ($userimg)=>url('/storage/users/' .$userimg),
        );
    }
}
