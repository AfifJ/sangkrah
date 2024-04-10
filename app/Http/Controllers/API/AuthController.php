<?php

namespace App\Http\Controllers\API;

use App\Models\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed
            $user = Auth::user();
            return response()->json(['message' => 'Login successful', 'user' => $user], 200)->header('Access-Control-Allow-Origin', '*');
        }

        // Authentication failed
        return response()->json(['message' => 'Invalid credentials'], 401)->header('Access-Control-Allow-Origin', '*');
    }
    public function logout(Request $request)
    {
        Auth::logout();
    
        $request->session()->invalidate();
    
        $request->session()->regenerateToken();
    
        return redirect('/login');
    }
}