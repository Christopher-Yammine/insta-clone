<?php

use App\Http\Controllers\FeedController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::controller(UserController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post("/create_post", [FeedController::class, 'create_post']);
Route::get("/get_feed", [FeedController::class, 'display_feed']);
Route::get('/profile_feed/{id?}', [FeedController::class, 'get_profile_feed']);
Route::get('/follow/{id}', [FollowController::class, 'follow_user']);
Route::get('/unfollow/{id}', [FollowController::class, 'unfollow_user']);
