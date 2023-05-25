<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsEmail;
use App\Mail\ContactUsMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactUsController extends Controller
{
    
    public function index()
    {
        return Inertia::render('ContactUs')->withViewData([
            'title' => 'Contact Us',
            'description' => 'Have a news tip, feedback, or a press inquiry? Get in touch with our team at [News Site Name]. We welcome your input and are committed to delivering accurate and timely news. Contact us today to connect with our dedicated staff and contribute to our mission of keeping you informed.',
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
        ]);

        Mail::to('pokoss333@gmail.com')->queue(new ContactUsEmail([
            'name' => $request->name,
            'email' => $request->email,
            'telephone' => $request->telephone,
            'message' => $request->message,
        ]));

        return redirect()->back()->with('success', 'We have received you request, we shall be in contact soon');
    }
}
