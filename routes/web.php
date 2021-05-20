<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::view('/create','welcome');
Route::view('/about','welcome');
Route::view('/login','welcome');
Route::view('/change','welcome');
Route::view('/inicioUser','welcome');
Route::view('/inicioAdmin','welcome');
Route::view('/delete','welcome');
Route::view('/Adelete','welcome');
Route::view('/Achange','welcome');




