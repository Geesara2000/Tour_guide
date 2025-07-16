<?php

namespace App\Http\Controllers\admin;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|max:255',
            'password' => 'required|string|min:6|max:255'
        ]);

        $admin = User::where('email', $request->email)->where('role', 'admin')->first();

        if (!$admin || !Hash::check($request->password, $admin->password)) {
            return response()->json([
                'status' => false,
                'message' => 'Either admin email/password is incorrect'
            ]);
        }

        $token = $admin->createToken($admin->name . '-Admin-Auth-Token')->plainTextToken;

        return response()->json([
            'status' => true,
            'message' => 'Admin login successful',
            'token_type' => 'Bearer',
            'id' => $admin->id,
            'role' => $admin->role,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        $admin = User::where('id', $request->user()->id)->first();

        if ($admin) {
            $admin->tokens()->delete();
            return response()->json([
                'message' => 'Admin logged out successfully.'
            ]);
        } else {
            return response()->json([
                'message' => 'Admin not found.'
            ]);
        }
    }
}



