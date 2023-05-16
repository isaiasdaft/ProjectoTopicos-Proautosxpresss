<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Controllers\BaseController as BaseController;
use Validator;

class PassportAuthController extends BaseController
{
    public function register(Request $request){

        $validator = Validator::make($request->all(), [
            'name'=>'required|min:4',
            'lastname'=>'required|min:4',
            'email'=>'required|email',
            'address'=>'required|min:10',
            'password'=>'required|min:8',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;

        return $this->sendResponse($success, 'User register successfully.');
    }

    public function login(Request $request){

        $data=[
            'email'=>$request->email,
            'password'=>$request->password,
        ];

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')->accessToken; 
            $success['name'] =  $user->name;
            return $this->sendResponse($success, 'User login successfully.');
        } 
        else{ 
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        }
    }
    public function destroy(Request $request)
    {
        $user = User::where('email', $request->email)->delete();
    }
    
    public function update(Request $request)
    {
        User::where('email', $request->email)
            ->update(['password' => bcrypt($request->newPassword)]);

    }

    public function authenticatedUserDetails()
    {
        //returns details
        return response()->json(['authenticated-user' => auth()->user()], 200);
    }

}
