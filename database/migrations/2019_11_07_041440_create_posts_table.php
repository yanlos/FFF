<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->text('description');
            $table->text('address');
            $table->timestamp('start_date');
            $table->timestamp('end_date');
            $table->integer('upvotes')->nullable()->default('0');
            $table->integer('downvotes')->nullable()->default('0');
            $table->timestamps();
            $table->string('author')->nullable()->default("ZOIDMEISTER");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
