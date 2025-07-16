<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    // Store a new booking
    public function store(Request $request)
    {
        $request->validate([
            'tour_id' => 'required|exists:tours,id',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'date' => 'required|date|after_or_equal:today'
        ]);

        $booking = Booking::create($request->all());

        return response()->json([
            'message' => 'Booking successful!',
            'booking' => $booking
            ], 201);
    }

    // Get all bookings
    public function index()
    {
        $booking = Booking::with('tour')->get();
        return response()->json($booking);
    }

    // Get a single booking by ID
    public function show($id)
    {
        $booking = Booking::with('tour')->find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }
        return response()->json($booking);
    }

    // Delete a booking
    public function destroy($id)
    {
        $booking = Booking::find($id);
        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }
        $booking->delete();
        return response()->json(['message' => 'Booking deleted successfully']);
    }
}

