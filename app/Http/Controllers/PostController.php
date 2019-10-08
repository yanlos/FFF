<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();

        return response()->json($posts);
    }


    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required'
        ]);

        $post = Post::create($request->all());

        return response()->json([
            'message' => 'Great success! New post created',
            'post' => $post
        ]);
    }

    
    public function show(Post $post)
    {
        return $post;
    }

   
    public function update(Request $request, Post $post)
    {
        $request->validate([
           'title'       => 'nullable',
           'description' => 'nullable'
        ]);

        $post->update($request->all());

        return response()->json([
            'message' => 'Great success! Task updated',
            'post' => $post
        ]);
    }

    public function destroy(Post $post)
    {
         $post->delete();

        return response()->json([
            'message' => 'Successfully deleted post!'
        ]);
    }
}
