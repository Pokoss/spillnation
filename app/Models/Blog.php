<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sitemap\Contracts\Sitemapable;
use Spatie\Sitemap\Tags\Url;

class Blog extends Model implements Sitemapable
{
    use HasFactory;

    protected $table = 'blog';

    protected $fillable = [
        'title',
        'description',
        'slug',
        'category',
        'content',
        'imageurl',
        'image_description',
        'uploadedby'
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function toSitemapTag(): Url|string|array
    {
        // return route('blog.show', $this);
        return Url::create(route('blog.show', $this))
            ->setLastModificationDate(Carbon::parse($this->updated_at));
    }
    
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'uploadedby');
    }

    public function blogCategory()
    {
        return $this->belongsTo(BlogCategory::class);
    }

    public function blogComments()
    {
        return $this->hasMany(BlogComment::class)->with(['user:id,name', 'replies'])
            ->withCount('likes')
            ->whereNull('parent_id');
    }
}