<?php

namespace App\Http\Controllers;

use App\Models\Ads;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Inertia::render('AdminAds');
    
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //   
        $title = $request->input('title');
        $description = $request->input('description');
        $link = $request->input('link');
        $value = $title . ' ' . Str::random();
        $slug = Str::slug($value . '-');
        $file = $request->file('image');
        $filename = $slug . '.' . $file->extension();;
        $path = $file->storeAs('/images/ads', $filename, ['disk' => 'public_uploads']);

        $ads = Ads::create([
            'title' => $slug,
            'link' => $link,
            'description' => $description,
            'imageurl' => $path
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function show(Ads $ads)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function edit(Ads $ads)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ads $ads)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ads  $ads
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ads $ads)
    {
        //
    }
}
