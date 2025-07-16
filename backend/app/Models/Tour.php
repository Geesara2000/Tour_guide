<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'price', 'status', 'image',
        'location', 'duration', 'tour_type'
    ];



}

//6393|lkHDvTEjHDShJGcJaD4yjRg4xsSoduoYYBHcS6Dl6138bf2a
