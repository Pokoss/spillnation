<?php

namespace App\Http\Controllers;

use App\Models\BlogCategory;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminVideoController extends Controller
{
    public function index(Request $request)
    {
        $search_text = $request->input('search_text');

        $videos = Video::where('title', 'LIKE', "%{$search_text}%")
            ->latest()->get();
        $categories = BlogCategory::withCount('videos')->get();

        return Inertia::render('AdminVideos', [
            'videos' => $videos,
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'video_url' => 'required|url',
            'image' => 'required|image',
            'category_id' => 'required',
        ]);

        $value = $request->input('title') . ' ' . Str::random();
        $slug = Str::slug($value . '-');

        $file = $request->file('image');
        $filename = $slug . '.' . $file->extension();
        $path = $file->storeAs('/images/video', $filename, ['disk' => 'public_uploads']);

        $blog = Video::create([
            'title' => $request->input('title'),
            'slug' => $slug,
            'video_url' => $request->input('video_url'),
            'image_url' => $path,
            'category_id' => 2 // $request->input('category_id'),
        ]);
    }

}
