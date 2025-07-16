<?php

use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\TourController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Public Routes
Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/admin/login', [AdminController::class, 'login']);

Route::get('/tours', [TourController::class, 'index']); // Get all tours
Route::get('/tours/{id}', [TourController::class, 'show']); // Get a single tour
Route::get('/dashboard-stats', [DashboardController::class, 'getStats']);

// Protected Routes (Requires Authentication)
Route::middleware(['auth:sanctum'])->group(function () {

    // Routes Only for Admins
    Route::middleware(['admin'])->group(function () {
        Route::post('/tours', [TourController::class, 'store']); // Create a tour
        Route::post('/tours/{id}', [TourController::class, 'update']); // Update a tour
        Route::delete('/tours/{id}', [TourController::class, 'destroy']); // Delete a tour
        Route::get('/admin/bookinglist', [BookingController::class, 'index']);
        Route::get('/admin/logout', [AdminController::class, 'logout']);
    });

    // Routes Only for Users
    Route::middleware(['user'])->group(function () {
        Route::post('/bookings', [BookingController::class, 'store']); // Create a booking
        Route::get('/bookings', [BookingController::class, 'index']); // Get all bookings
        Route::get('/bookings/{id}', [BookingController::class, 'show']); // Get a single booking
        Route::delete('/bookings/{id}', [BookingController::class, 'destroy']); // Delete a booking
        Route::get('/logout', [UserController::class, 'logout']);
    });
});
