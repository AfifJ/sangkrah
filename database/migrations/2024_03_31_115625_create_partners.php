<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('partners', function (Blueprint $table) {
            $table->id();
            $table->string('name',50)->unique();
            $table->string('email',50)->unique();
            $table->string('password');
            $table->string('phone',50);
            $table->string('logo')->nullable();
            $table->string('service',50);
            $table->longText('desc')->nullable();
            $table->bigInteger('balance');
            $table->integer('point');
            $table->string('pict');
            $table->string('province',50);
            $table->string('kabupaten',50);
            $table->string('kecamatan',50);
            $table->string('kelurahan',50);
            $table->string('address_detail');
            $table->string('coordinate');
            $table->boolean('active_status')->default(false);
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partners');
    }
};
