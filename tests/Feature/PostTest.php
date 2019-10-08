<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use App\Post;


class PostTest extends TestCase
{
   use DatabaseMigrations;

    /** @test */
    public function it_will_show_all_tasks()
    {
        $posts = factory(Post::class, 10)->create();

        $response = $this->get(route('posts.index'));

        dd($response->getContent());

        $response->assertStatus(200);

        $response->assertJson($posts->toArray());

    }
}
