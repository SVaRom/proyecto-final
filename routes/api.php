<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ProductoController;



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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/usuario',[UsuarioController::class,'index']);
Route::post('/addUser',[UsuarioController::class,'store']);
Route::get('/search',[UsuarioController::class,'show']);
Route::post('/changepass',[UsuarioController::class,'update']);
Route::get('/delete',[UsuarioController::class,'destroy']);
Route::post('/addProducto',[ProductoController::class,'store']);
Route::get('/producto',[ProductoController::class,'index']);
Route::get('/deleteP',[ProductoController::class,'destroy']);
Route::post('/changeP',[ProductoController::class,'update']);
Route::get('/searchP',[ProductoController::class,'show']);






