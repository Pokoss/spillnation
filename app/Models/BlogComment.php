<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogComment extends Model
{
    use HasFactory;
    protected $table = 'blog_comment';
    public $timestamps = true;
    protected $fillable = [
        'user_id',
        'blog_id',
        'parent_id',
        'body'
    ];
    
    protected $appends = ['liked_by_user'];

    public function blog()
    {
        return $this->belongsTo(Blog::class);
    }

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function replies()
    {
        return $this->hasMany(BlogComment::class, 'parent_id')->with(['user:id,name', 'replies'])->withCount('likes');
    }

    public function likes()
    {
        return $this->hasMany(BlogCommentLike::class, 'comment_id');
    }

    public function getLikedByUserAttribute()
    {
        return $this->likes()->where('user_id', auth()->id())->exists();
    }
}