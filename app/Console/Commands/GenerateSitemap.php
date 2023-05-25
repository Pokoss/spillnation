<?php

namespace App\Console\Commands;

use App\Models\Blog;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generates a sitemap';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // creates sitemap with all urls in your website
        // $sitemap = SitemapGenerator::create(config('app.url'));
        $sitemap = Sitemap::create();
        
        $static_urls = ['/about-us', '/contact-us', '/advertise', '/privacy-policy', '/terms-of-use'];
        foreach ($static_urls as $url) {
            $sitemap->add(Url::create($url)
                ->setPriority(0.5)
                ->setChangeFrequency('yearly')
                ->setLastModificationDate(Carbon::create('2023', '05', '01')));
        }

        $sitemap->add(Blog::all());

        $sitemap->writeToFile(public_path('sitemap.xml'));

        return Command::SUCCESS;
    }
}