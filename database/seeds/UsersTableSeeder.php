<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => '1',
            'name'=>'The3ballsoft',
 			'email' => 'admin@gmail.com',
            'password' => bcrypt('123456')
        ]);

    }
}
