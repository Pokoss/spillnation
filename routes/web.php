<?php

use App\Http\Controllers\AdminBlogController;
use App\Http\Controllers\AdminVideoController;
use App\Http\Controllers\AdsController;
use App\Http\Controllers\AdvertiseRequestController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\StaticController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/payments', function () {
    return Inertia::render('Payments');
});

Route::get('/', [BlogController::class, 'index']);
Route::get('/about-us', [StaticController::class, 'about_us']);
Route::get('/terms-of-use', [StaticController::class, 'terms_of_use']);
Route::get('/privacy-policy', [StaticController::class, 'privacy_policy']);
Route::resource('/contact-us', ContactUsController::class);
Route::resource('/advertise', AdvertiseRequestController::class);

Route::post('/subscribe', [SubscriptionController::class, 'store']);
Route::get('/search', [BlogController::class, 'search']);
Route::post('/comment', [BlogController::class, 'comment']);
Route::post('/like', [BlogController::class, 'like']);

Route::middleware('admin')->group(function () {
    Route::get('/admin', fn()=>redirect('/admin/blog'));
    Route::resource('/admin/ssgtv', AdminVideoController::class);
    Route::post('/admin/blog/{slug}/image', [AdminBlogController::class, 'update_image']);
    Route::get('/admin/ads', [AdsController::class, 'index']);
    Route::post('/admin/ads', [AdsController::class, 'store']);
    Route::resource('/admin/blog', AdminBlogController::class)->only('index', 'show', 'store', 'update', 'destroy')->names('admin');
});


Auth::routes();
Route::get('/home', [BlogController::class, 'index'])->name('home');

Route::get('/category/{category}', [BlogController::class, 'dispayCategoryBlogs']);
Route::get('/{slug}', [BlogController::class, 'show'])->name('blog.show');
