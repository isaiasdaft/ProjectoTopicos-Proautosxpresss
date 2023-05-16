<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Https\Controllers\FleteController;
use App\Https\Controllers\RepartoController;
use App\Https\Controllers\ProvedoresController;
use App\Https\Controllers\TiendaController;


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

Route::get('/', function () { return view('welcome');});
Route::get('/user',  [ UserController::class, 'index']);

//para las rutas de user
Route::get('/1', [UserController::class, 'index']);
//para las rutas de Tienda
Route::get('/2',  [TiendaController::class, 'createT']);




//para las rutas de Provedores
Route::get('/3',  [ProvedoresController::class, 'index']);
//para las rutas de reparto
Route::get('/4',  [UserController::class, 'index']);
//para las rutas de Flete
Route::get('/5',  [UserController::class, 'index']);

Route::view('/Home', 'welcome');
Route::view('/login', 'welcome');
Route::view('/changePassword','welcome');
Route::view('/DeleteUser','welcome');
Route::view('/Register','welcome');
