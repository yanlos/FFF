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

Route::group(['prefix' => 'auth'], function () {

    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => 'jwt.verify'], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('me', 'AuthController@me');
    });

    /*
    Route::group(['middleware' => 'jwt.refresh'], function () {
        Route::post('refresh', 'AuthController@refresh');
    });
    */
});

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('/posts', 'PostController@index')->name('posts.index');
    Route::get('/posts/{post}', 'PostController@show')->name('posts.show');
    Route::put('/posts/{post}', 'PostController@update')->name('posts.update'); 
    Route::delete('/posts/{post}', 'PostController@destory')->name('posts.destroy');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
