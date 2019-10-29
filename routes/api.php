<?php


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
//Route::get('/posts', 'PostController@index')->name('posts.index');
//
//Route::get('/posts/{post}', 'PostController@show')->name('posts.show');
//
//Route::put('/posts/{post}', 'PostController@update')->name('posts.update');
//
//Route::delete('/posts/{post}', 'PostController@destory')->name('posts.destroy');


Route::group(['prefix' => 'auth'], function () {

    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::post('logout', 'AuthController@logout');
        Route::post('me', 'AuthController@me');
    });

    Route::group(['middleware' => 'jwt.refresh'], function () {
        Route::post('refresh', 'AuthController@refresh');
    });

});
