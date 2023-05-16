<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Tienda;

class TiendaController extends Controller
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
    public function createT(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre'=>'required|max::255',
            'direccion'=>'required|max::255',
            'tipo'=>'required|max::255',
         ]);
         if ($validator->fails()){ 
             return $validator->errors();
         }

         $tienda= tienda::create ([ 
             'nombre'=>$request->nombre,
             'direccion'=>$request->direccion,
             'CP'=>$request->CP,
             'tipo'=>$request->tipo,
             'ima'=>$request->ima,
             'arribo'=>$request->arribo,
             
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
    public function show(Request $request)
    {
        $tienda = DB::table('tienda')
        ->where('nombre','like','%'.$request->nombre.'%')
        ->get();
        return $tienda;
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
        $tienda = DB::table ("tienda")
       ->where ("id", $request->id)
       ->update(["x" => $request->x]);
      
       $tienda= DB::table ("tienda")
       -> where ("id", $request->id )->get();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $productos = tienda::where('id', $request->id)->delete();
    }
    
    public function showToken() { echo csrf_token(); }
}
