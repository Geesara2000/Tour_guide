<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{

    public function register(Request $request)
{
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => 'required|string|min:6|max:255'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        if ($user) {
            $token = $user->createToken($user->name . 'Auth-Token')->plainTextToken;
            return response()->json([
                'status' => true,
                'message' => 'Registration successful',
                'token_type' => 'Bearer',
                'token' => $token
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong during registration'
            ]);
        }

}



    public function login(Request $request)
{

        $request->validate([
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:6|max:255'
        ]);

        $user = User::where('email', $request->email)->where('role', 'user')->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => false,
                'message' => 'Either user email/password is incorrect'
            ]);
        }

        $token = $user->createToken($user->name . 'Auth-Token')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'Login successful',
            'token_type' => 'Bearer',
            'id' => $user->id,
            'role' => $user->role,
            'token' => $token
        ]);

}


    public function logout(Request $request){

        $user = User::where('id',$request->user()->id)->first();

        if ($user) {
            $user->tokens()->delete();
            return response()->json([
                'message' => 'logout successfully.'
            ]);
        } else {
            return response()->json([
                'message' => 'user not found.'
            ]);
        }

    }
}



