<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Credentials: true');
//header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE');
//header("Access-Control-Allow-Headers: Authorization, X-Requested-With,  Content-Type, Accept");

Route::post('/api/restaurants/location', 'RestaurantController@showRestaurants');
Route::get('/api/restaurants/{id}', 'RestaurantController@show');
Route::group(['middleware' => 'auth'], function () {
    Route::get('/api/restaurants', 'RestaurantController@index');
    Route::post('/api/restaurants', 'RestaurantController@create');
    Route::put('/api/restaurants/{id}', 'RestaurantController@update');
    Route::delete('/api/restaurants/{id}', 'RestaurantController@destroy');

    Route::get('/api/products', 'ProductController@index');
    Route::post('/api/products', 'ProductController@create');
    Route::get('/api/products/{id}', 'ProductController@show');
    Route::put('/api/products/{id}', 'ProductController@update');
    Route::delete('/api/products/{id}', 'ProductController@destroy');
});

Route::get('/admin', 'HomeController@admin');

Route::auth();

Route::get('/', function () {
    return view('home');
});

Route::get('/{all}', function () {
    return view('home');
});

Route::get('/{all}/{sub_all}', function () {
    return view('home');
});

