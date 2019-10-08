<?php

use Illuminate\Http\Request;

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
Route::get('/posts', 'PostController@index')->name('posts.index');

Route::post('/posts', 'PostController@store')->name('posts.store');

Route::get('/posts/{posts}', 'PostController@show')->name('posts.show');

Route::put('/posts/{posts}', 'PostController@update')->name('posts.update');

Route::delete('/posts/{posts}', 'PostController@destory')->name('posts.destroy');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
