<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Inbox extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'type',
        'read_status',
        'user_id',
        'partner_id',
    ];

    public function getCreatedAtDateTimeAttribute()
    {
        return Carbon::parse($this->created_at)->format('Y-m-d H:i:s');
    }
    public function getUpdatedAtDateTimeAttribute()
    {
        return Carbon::parse($this->updated_at)->format('Y-m-d H:i:s');
    }
    /*protected function rewardPict(): Attribute{
        return Attribute::make(
            get: fn ($rewardPict)=>url('/storage/users/' .$rewardPict),
        );
    }*/
}
