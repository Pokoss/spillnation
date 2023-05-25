<?php

namespace App\Models;

use App\Models\BlogCategory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image_url',
        'video_url',
        'slug',
        'category',
    ];

    public function category()
    {
        return $this->belongsTo(BlogCategory::class);
    }
}
