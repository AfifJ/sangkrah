<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [App\Http\Controllers\API\AuthController::class, 'login']);
Route::put('/passchange/{user_id}', [App\Http\Controllers\API\UsersController::class, 'updatePassword']);

Route::apiResource('/users', App\Http\Controllers\API\UsersController::class);
Route::apiResource('/partners', App\Http\Controllers\API\PartnersController::class);
Route::apiResource('/transactions', App\Http\Controllers\API\TransactionsController::class);
Route::apiResource('/rewards', App\Http\Controllers\API\RewardsController::class);
Route::apiResource('/userrewards', App\Http\Controllers\API\userRewardController::class);
Route::apiResource('/topup', App\Http\Controllers\API\TopupController::class);
