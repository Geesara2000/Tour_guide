<?php

namespace App\Http\Controllers\admin;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Tour;
use Illuminate\Support\Facades\Storage;

class TourController extends Controller
{
    /**
     * Display a listing of the tours.
     */
    public function index()
    {
        $tours = Tour::all();
        // $tours = Tour::orderBy('created_at','desc')->get();
        return response()->json($tours);
    }

    /**
     * Store a newly created tour.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'status' => 'required|string|in:Available,Unavailable',
            'location' => 'required|string|max:255', // New field
            'duration' => 'required|string|max:255',  // New field
            'tour_type' => 'required|string|max:255', // New field
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('tours', 'public');
        }

        $tour = Tour::create([
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'status' => $request->status,
            'location' => $request->location,
            'duration' => $request->duration,
            'tour_type' => $request->tour_type,
            'image' => $imagePath ? '/storage/' . $imagePath : null,
        ]);

        return response()->json([
            'message' => 'Tour created successfully',
            'tour' => $tour
        ], 201);
    }


    /**
     * Display the specified tour.
     */
    public function show($id)
    {
        $tour = Tour::findOrFail($id);
        return response()->json($tour);
    }

    /**
     * Update the specified tour.
     */
    public function update(Request $request, $id)
{
    $tour = Tour::findOrFail($id);

    $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'price' => 'required|numeric',
        'status' => 'required|string|in:Available,Unavailable',
        'location' => 'required|string|max:255', // New field
        'duration' => 'required|string|max:255',  // New field
        'tour_type' => 'required|string|max:255', // New field
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
    ]);

    // Handle image update
    if ($request->hasFile('image')) {
        if ($tour->image) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $tour->image));
        }

        $imagePath = $request->file('image')->store('tours', 'public');
        $tour->image = '/storage/' . $imagePath;
    }

    // Update other fields
    $tour->update([
        'title' => $request->title,
        'description' => $request->description,
        'price' => $request->price,
        'status' => $request->status,
        'location' => $request->location,
        'duration' => $request->duration,
        'tour_type' => $request->tour_type,
    ]);

    return response()->json([
        'message' => 'Tour updated successfully',
        'tour' => $tour
    ]);
}


    /**
     * Remove the specified tour.
     */
    public function destroy($id)
    {
        $tour = Tour::findOrFail($id);

        // Delete image if exists
        if ($tour->image) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $tour->image));
        }

        $tour->delete();

        return response()->json(['message' => 'Tour deleted successfully']);
    }
}
