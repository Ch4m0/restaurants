<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    protected $table = 'products';

    protected $fillable = ['name', 'price', 'description'];

    public function restaurant()
    {
        return $this->hasOne('App/Restaurant');
    }
}
