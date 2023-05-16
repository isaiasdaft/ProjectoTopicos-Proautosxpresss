<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Employee;


class EmployeeController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'=>'required|max::100',
            'lastname'=>'required|max::100',
            'address'=>'required|max::100',
            'position'=>'required|max::50',
            'phone'=>'required|max::10',
         ]);
         if ($validator->fails()){ 
             return $validator->errors();
         }
         $employees= Employee::create ([ 
             'name'=>$request->name,
             'lastname'=>$request->lastname,
             'address'=>$request->address,
             'position'=>$request->position,
             'phone'=>$request->phone,
                                                 
         ]);
    }

    public function show()
    {
       return Employee::all();
    }

    public function destroy(Request $request)
    {
        $employees = Employee::where('id', $request->id)->delete();
    }

}
