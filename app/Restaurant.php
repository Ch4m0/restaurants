<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Restaurant extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $table = 'restaurants';
    protected $fillable = [
        'logo', 'name', 'location', 'domicile',
        'phone', 'hour_closing','description'
    ];

    public function products()
 	{
        return $this->hasMany('App\Product');
    }

}
