<?php

namespace App\Http\Controllers;

use App\Models\AdvertiseRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdvertiseRequestController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Advertise')->withViewData([
            'title' => 'Advertise with us',
            'description' => 'Promote your brand to a wide audience by advertising with us. Our Advertise with Us page provides information on the various advertising options and formats available. Reach your target market and increase brand visibility through our website. Discover the benefits and opportunities of advertising with us and connect with our dedicated team to discuss customized advertising solutions.',
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'telephone' => 'required|string',
        ]);

        AdvertiseRequest::create([
            'name' => $request->name,
            'email' => $request->email,
            'telephone' => $request->telephone,
            'message' => $request->message,
        ]);

        return redirect()->back()->with('success', 'We have received you request, we shall be in contact soon');
    }
}
