<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCommentLike extends Model
{
    use HasFactory;
    protected $table = 'blog_comment_like';

    protected $fillable = [
        'user_id',
        'comment_id',
    ];

}
