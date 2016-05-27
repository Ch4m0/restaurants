<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class RestaurantsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        

        factory(App\Restaurant::class, 20)->create()->each(function($u) {
            $u->products()->saveMany(factory(App\Product::class, 5)->make());
        });
    }
}
