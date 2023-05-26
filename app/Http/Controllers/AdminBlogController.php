<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\BlogCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class AdminBlogController extends Controller
{
    public function index(Request $request)
    {
        $search_text = $request->input('search_text');

        $posts = Blog::where('title', 'LIKE', "%{$search_text}%")
            ->orWhere('content', 'LIKE', "%{$search_text}%")
            ->latest()->get();
        $categories = BlogCategory::withCount('blog')->get();

        return Inertia::render('AdminBlog', [
            'posts' => $posts,
            'categories' => $categories,
        ]);
    }

    public function show($blog)
    {
        $post = Blog::where('slug', $blog)->first();
        $categories = BlogCategory::all();

        if ($post) {
            return Inertia::render('AdminBlogDetail', ['postData' => $post, 'categories' => $categories]);
        }

        return Inertia::render('AdminBlogDetail', ['categories' => $categories]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'category' => 'required',
            'content' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $value = $request->input('title') . ' ' . Str::random();
        $slug = Str::slug($value . '-');

        $file = $request->file('image');
        $filename = $slug . '.' . $file->extension();
        $path = $file->storeAs('/images/blog', $filename, ['disk' => 'public_uploads']);

        $blog = Blog::create([
            'title' => $request->input('title'),
            'slug' => $slug,
            'description' => $request->input('description'),
            'category' => $request->input('category'),
            'content' => $request->input('content'),
            'uploadedby' => auth()->id(),
            'imageurl' => $path,
            // 'image_description' => $request->input('image_description')
        ]);

        return redirect('/admin/blog');
    }

    public function update(Request $request, $slug)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'category' => 'required',
            'content' => 'required',
        ]);

        $blog = Blog::where('slug', $slug)->first();
        $blog->title = $request->input('title');
        $blog->content = $request->input('content');
        $blog->description = $request->input('description');
        $blog->category = $request->input('category');
        // $blog->image_description = $request->input('image_description');

        $blog->save();
    }


    public function destroy($slug)
    {
        Blog::where('slug', $slug)->delete();
        return redirect('/admin/blog');
    }


    public function update_image(Request $request, $slug)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $blog = Blog::where('slug', $slug)->first();

        $file = $request->file('image');

        // if ($file) {
        //     // $filename = $blog->slug . '.' . $file->extension();
        //     $destinationPath = 'images/blog/' . $blog->slug . '.webp';
        //     $imageResize = Image::make($file)->encode('webp', 70)->resize(960, null, function ($constraint) {
        //         $constraint->aspectRatio();
        //     })->save(public_path($destinationPath));
        //     // $path = $file->storeAs('/images/blog', $filename, ['disk' => 'public_uploads']);
        //     $blog->imageurl = $destinationPath;
        // }

        $blog->save();
    }
}