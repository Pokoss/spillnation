<?php

namespace App\Http\Controllers;

use App\Models\Ads;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\BlogComment;
use App\Models\BlogCommentLike;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        //

        $latest = Blog::latest()->first();
        $latests = Blog::latest()->where('id', '!=', $latest->id)->limit(4)->get();
        $trending_posts = Blog::latest()->limit(4)->get();

        // $blog_category = BlogCategory::with(['blog' => function($query) {
        //     $query->latest('created_at')->take(4);
        // }])->get();

        // $blog_category = BlogCategory::with(['blog' => function($query) {
        //     $query->latest('created_at')->take(4);
        // }])->get();

        // $blog_category = BlogCategory::with(['blog' => function($query) {
        //     $query->latest('created_at');
        // }])->get();

        // $blog_category = BlogCategory::with('blog')->latest('created_at')->take(4)->get();
        $blog_category = BlogCategory::with('blog')->latest('created_at')->get();
        $ads = Ads::all();




        //return Response($entertainment);
        return Inertia::render('Home', [
            'latest' => $latest,
            'latests' => $latests,
            'blog_category' => $blog_category,
            'trending_posts' => $trending_posts,
            'ads'=>$ads
        ]);
    }


    public function search(Request $request)
    {
        $search_text = $request->input('search_text');

        $posts = Blog::where('title', 'LIKE', "%{$search_text}%")
            ->orWhere('content', 'LIKE', "%{$search_text}%")
            ->get();

        return Inertia::render('SearchArticleScreen', [
            'posts' => $posts,
        ]);
    }


    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $title = $request->input('articleTitle');
        $description = $request->input('articleDescription');
        $category = $request->input('articleCategory');
        $content = $request->input('articleContent');
        $value = $title . ' ' . Str::random();
        $slug = Str::slug($value . '-');

        $file = $request->file('articleImage');
        $filename = $slug . '.' . $file->extension();;
        // $file-> move(public_path('/images/blogpictures'), $filename);

        $path = $file->storeAs('/images/blogpictures', $filename, ['disk' => 'public_uploads']);

        $blog = Blog::create([
            'title' => $title,
            'slug' => $slug,
            'description' => $description,
            'category' => $category,
            'content' => $content,
            'uploadedby' => auth()->id(),
            'imageurl' => $path
        ]);
    }

    public function show($blog)
    {
        //
        $blog = Blog::where('slug', $blog)->with('user:id,name')->first();
        $categoryid = $blog->category;
        $category_name = BlogCategory::where('id', $categoryid)->first();
        $category = Blog::where('category', $categoryid)->where('id', '!=', $blog->id)->latest()->limit(4)->get();
        $latests = Blog::latest()->where('id', '!=', $blog->id)->limit(6)->get();
        $comments = $blog->blogComments;
        return Inertia::render('ArticleScreen', [
            'blog' => $blog,
            'category_name' => $category_name,
            'category' => $category,
            'latests' => $latests,
            'comments' => $comments
        ])->withViewData([
            'title' => $blog->title,
            'description' => $blog->description,
            'image' => url($blog->imageurl),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Blog  $blog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        //
    }

    public function displayUploadArticle()
    {
        //
        $categories = BlogCategory::all();

        //return Response($category);
        return Inertia::render('UploadArticleScreen', ['categories' => $categories]);
    }

    public function dispayCategoryBlogs(Request $request)
    {
        //
        $category_slug = $request->category;

        $category = BlogCategory::where('slug', $category_slug)->first();

        $blogs = Blog::where('category', $category->id)->get();
        $trending_posts = Blog::latest()->limit(4)->get();

        return Inertia::render('CategoryScreen', [
            'blogs' => $blogs,
            'category' => $category->name,
            'trending_posts' => $trending_posts,
        ])->withViewData([
            'title' => $category->name,
            'description' => 'Explore our diverse range of categories to find the content that interests you. Our Categories page showcases a wide selection of topics, from news and entertainment to lifestyle and technology. Discover the organized structure of our website and easily navigate to the content you love. Browse through our extensive categories and delve into a world of captivating information.'
        ]);
    }

    public function comment(Request $request)
    {
        $comment = $request->input('body');
        $blog_id = $request->input('blog_id');
        $parent_id = $request->input('parent_id');
        $user = auth()->user()->id;
        $query = BlogComment::create([
            'blog_id' => $blog_id,
            'parent_id' => $parent_id,
            'user_id' => $user,
            'body' => $comment,
        ]);
    }

    public function like(Request $request)
    {
        $comment_id = $request->input('parent_id');
        $user_id = auth()->id();
        $like = BlogCommentLike::where('comment_id', $comment_id)->where('user_id', $user_id)->first();

        if ($like) {
            $like->delete();
        } else {
            BlogCommentLike::create([
                'comment_id' => $comment_id,
                'user_id' => $user_id,
            ]);
        }
    }
}
