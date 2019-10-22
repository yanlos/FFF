<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'title'       => $faker->sentence(),
        'description' => $faker->text(),
        'address'     => $faker->text(),
        'start_date'  => $faker->dateTime(),
        'end_date'    => $faker->dateTime(),
    ];
});
