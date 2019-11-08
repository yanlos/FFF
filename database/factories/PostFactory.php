<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title'       => $faker->sentence(),
        'description' => $faker->text(),
        'address'     => $faker->text(),
        'start_date'  => $faker->dateTime(),
        'end_date'    => $faker->dateTime(),
        'upvotes'     => $faker->randomNumber(),
        'downvotes'   => $faker->randomNumber()
    ];
});