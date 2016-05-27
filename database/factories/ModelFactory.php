<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->safeEmail,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});


$factory->define(App\Restaurant::class, function (Faker\Generator $faker) {

	$location = ['(10.9421122, 74.8313157)','(11.2264541,-74.189259)','(11.2212,-74.1998867)','(10.8522824,-74.7859043)','(10.9263232,-74.783272)','(11.2319452,-74.1970043)','(11.2214836,74.1830751)','(11.2264541,-74.189259)','(11.2434379,-74.2152784)','(11.2412606,-74.1949083)','(11.0043988,-74.8290245)'];

    return [
        'name' => $faker->company,
        'phone' => $faker->phoneNumber,
        'logo' => $faker->imageUrl($width = 640, $height = 480),
        'description' => $faker->text($maxNbChars = 300),
        'domicile' => $faker->randomNumber(),
        'location' => $location [$faker->numberBetween($min=0, $max=10)],
 		'hour_closing'=> $faker->time($format = 'H:i:s', $max = 'now') // '20:49:42'
    ];
});

$factory->define(App\Product::class, function (Faker\Generator $faker) use ($factory) {
    return [
        'name' => $faker->word,
        'description' => $faker->text($maxNbChars = 300),
        'price' => $faker->randomNumber(),
 		// 'restaurant_id' => factory(Restaurant::class)->create()->id
 		'restaurant_id' => 1
    ];
});