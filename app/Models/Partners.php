<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

class Partners extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'logo',
        'service',
        'desc',
        'balance',
        'point',
        'pict',
        'province',
        'kabupaten',
        'kecamatan',
        'kelurahan',
        'address_detail',
        'coordinate',
        'active_status',
    ];

    public function getLogoAttribute($value)
    {
        if ($value) {
            return URL::to('/storage/partners/logo/' . $value);
        }
        return null;
    }

    public function getPictAttribute($value)
    {
        if ($value) {
            return URL::to('/storage/partners/pict/' . $value);
        }
        return null;
    }
}
