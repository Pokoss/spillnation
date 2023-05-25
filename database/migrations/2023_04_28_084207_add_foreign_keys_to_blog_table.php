<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('blog', function (Blueprint $table) {
            $table->foreign(['uploadedby'])->references(['id'])->on('users');
            $table->foreign(['category'])->references(['id'])->on('blog_category');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('blog', function (Blueprint $table) {
            $table->dropForeign('blog_uploadedby_foreign');
            $table->dropForeign('blog_category_foreign');
        });
    }
};
