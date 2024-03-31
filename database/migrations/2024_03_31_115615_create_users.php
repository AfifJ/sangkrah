<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use phpDocumentor\Reflection\Types\Nullable;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username',50)->unique();
            $table->string('fullname',50);
            $table->string('email',50)->unique();
            $table->string('password',50);
            $table->string('phone',50);
            $table->date('birth_date');
            $table->string('profile_pict')->nullable();
            $table->Integer('balance');
            $table->integer('point');
            $table->string('province',25);
            $table->string('kabupaten',50);
            $table->string('kecamatan',25);
            $table->string('kelurahan',25);
            $table->longText('detail');
            $table->string('coordinate');
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
