<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = ['tour_id', 'name', 'email', 'phone', 'date', 'price'];

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }

    // Automatically set the price when creating a booking
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($booking) {
            if ($booking->tour) {
                $booking->price = $booking->tour->price;
            }
        });
    }
}
