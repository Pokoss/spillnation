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
        Schema::table('blog_comment', function (Blueprint $table) {
            $table->foreign(['parent_id'])->references(['id'])->on('blog_comment')->onDelete('CASCADE');
            $table->foreign(['blog_id'])->references(['id'])->on('blog')->onDelete('CASCADE');
            $table->foreign(['user_id'])->references(['id'])->on('users')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('blog_comment', function (Blueprint $table) {
            $table->dropForeign('blog_comment_parent_id_foreign');
            $table->dropForeign('blog_comment_blog_id_foreign');
            $table->dropForeign('blog_comment_user_id_foreign');
        });
    }
};
