<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getStats()
    {
        $totalBookings = Booking::count();
        $totalUsers = User::count();
        $totalRevenue = Booking::sum('price'); // Assuming `price` column stores booking revenue

        return response()->json([
            'totalBookings' => $totalBookings,
            'totalUsers' => $totalUsers-1,
            'totalRevenue' => $totalRevenue,
        ]);
    }
}
