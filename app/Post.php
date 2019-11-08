<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title',
        'description',
        'start_date',
        'end_date',
        'address',
        'upvotes',
        'downvotes'
    ];
}