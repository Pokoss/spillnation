<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Primary Meta Tags -->
    <title>@isset($title){{$title}}@else Spillnation @endisset</title>
    <meta name="title" content="@isset($title){{$title}}@else Spillnation @endisset">
    <meta name="description" content="@isset($description){{$description}}@else Get the latest Ugandan celebrity gossip and scandalous news from our blog. Stay updated on the drama-filled lives of your favorite stars, relationships, and controversies. Uncover exclusive stories and spicy rumors about Uganda's entertainment scene. Dive into the world of the rich, famous, and infamous with our tantalizing gossip blog @endisset">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{url()->current()}}">
    <meta property="og:title" content="@isset($title){{$title}}@else Spillnation @endisset">
    <meta property="og:description" content="@isset($description){{$description}}@else Get the latest Ugandan celebrity gossip and scandalous news from our blog. Stay updated on the drama-filled lives of your favorite stars, relationships, and controversies. Uncover exclusive stories and spicy rumors about Uganda's entertainment scene. Dive into the world of the rich, famous, and infamous with our tantalizing gossip blog @endisset">
    <meta property="og:image" content="@isset($image){{$image}}@else {{url('/images/logo.png')}} @endisset">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{url()->current()}}">
    <meta property="twitter:title" content="@isset($title){{$title}}@else Spillnation @endisset">
    <meta property="twitter:description" content="@isset($description){{$description}}@else It is in the best interest of our professional news anchors to feed our esteemed viewers and the general public with impartial, multi-dimensional news, entertainment or in-depth analyses as possible. @endisset">
    <meta property="twitter:image" content="@isset($image){{$image}}@else {{url('/images/logo.png')}} @endisset">

    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600;700&amp;display=swap" rel="stylesheet">
    
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8694698492521431" crossorigin="anonymous"></script>

    @vite('resources/js/app.js')
    {{vite_assets()}}
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>