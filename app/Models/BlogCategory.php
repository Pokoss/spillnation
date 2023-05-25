<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory;

    protected $table = 'blog_category';


    public function blog()
    {
        return $this->hasMany(Blog::class,'category')->limit(5);
    }

    public function videos()
    {
        return $this->hasMany(Video::class, 'category_id');
    }
}
