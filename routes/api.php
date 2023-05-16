<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\TiendaController;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\ProvedoresController;
use App\Http\Controllers\EmployeeController;

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

Route::post('login', [PassportAuthController::class, 'login']);
Route::get('/token', [TiendaController::class, 'showToken']);
Route::post('Register', [PassportAuthController::class, 'register']);
Route::post('Userlogin', [PassportAuthController::class, 'login']);
Route::post('DeleteUser', [PassportAuthController::class, 'destroy']);
Route::post('changePassword', [PassportAuthController::class, 'update']);

//Rutas api de tienda
Route::middleware('auth:api')->group(function(){

    //employee
    Route::post('DEmplo', [EmployeeController::class, 'destroy']);
    Route::post('REmplo', [EmployeeController::class, 'create']);
    Route::post('BEmplo', [EmployeeController::class, 'show']);

    
    //Shop
    Route::get('/Btienda', [TiendaController::class, 'show']);
    Route::post('/Rtienda', [TiendaController::class, 'createT']);
    Route::post('/Dtienda', [TiendaController::class, 'destroy']);


    //rutas api de provedores
    Route::post('DProv', [ProvedoresController::class, 'destroy']);
    Route::post('RProv', [ProvedoresController::class, 'create']);
    Route::get ('BProv', [ProvedoresController::class, 'show']);


    //rutas api de Productos
    Route::post('Dprod', [ProductoController::class, 'destroy']);
    Route::post ('Rprod', [ProductoController::class, 'create']);
    Route::post('Vprod', [ProductoController::class, 'show']);

});







