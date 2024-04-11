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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('title',50);
            $table->string('trash_type',25);
            $table->integer('trash_amount');
            $table->Integer('total');
            $table->Integer('point_obtain');
            $table->longText('desc')->nullable();
            $table->string('payment_method');
            $table->string('status',10);
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('partner_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('partner_id')->references('id')->on('partners');
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
