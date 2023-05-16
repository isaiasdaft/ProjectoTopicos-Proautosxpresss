<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Producto;


class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre'=>'required|max::255',
            'provedorfk'=>'required|max::255',
            'descripcion'=>'required|max::255',
         ]);
         if ($validator->fails()){ 
             return $validator->errors();
         }
         $productos= Producto::create ([ 
             'nombre'=>$request->nombre,
             'provedorfk'=>$request->provedorfk,
             'Preciomenudeo'=>$request->Preciomenudeo,
             'Preciomayoreo'=>$request->Preciomayoreo,
             'descripcion'=>$request->descripcion,
             'pesoneto'=>$request->pesoneto,                                      
         ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
       return Producto::all();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $productos = Producto::where('id', $request->id)->delete();
    }
    public function showToken()
    {
        echo csrf_token();
    }
}
