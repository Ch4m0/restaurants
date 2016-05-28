<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Restaurant;


class RestaurantController extends Controller
{

    public function index()
    {
        $restaurants =  Restaurant::all();
        return response()->json($restaurants);
    }

    // calcula la distancia entre dos puntos y te lo expresa en Kilometros
    private function getDistance($latitude1, $longitude1, $latitude2, $longitude2) {
        $earth_radius = 6371;
        $latitude2 = floatval($latitude2);
        $longitude2 = floatval($longitude2);
        $dLat = deg2rad($latitude2 - $latitude1);
        $dLon = deg2rad($longitude2 - $longitude1);
        $a = sin($dLat/2) * sin($dLat/2) + cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * sin($dLon/2) * sin($dLon/2);
        $c = 2 * asin(sqrt($a));
        $d = $earth_radius * $c;
        // distanncia en kilometros
        return $d;
    }

    public function showRestaurants(Request $request)
    {
        $restaurants =  Restaurant::all();
        $input = $request->all();
        // $location= explode(',', $input['location']);
        $listRestaurant = array();

        foreach ($restaurants as $restaurant) {
            $string = str_replace(array('(',')'),"",$restaurant->location);
            $restaurantLocation = preg_split("/[\s,]+/", $string);

            $distance = $this->getDistance($input['lat'], $input['long'], $restaurantLocation[0], $restaurantLocation[1]);
                if ($distance < 10) {
                    # code...
                    $restaurant->distance = $distance;
                    $restauran->location = $restaurant->location;
                    $listRestaurant[] = $restaurant;
                }
                
        }
        return response()->json($listRestaurant);
    }

    public function showRestaurantList()
    {
        $restaurants =  Restaurant::all();
        return response()->json($restaurants);
    }

    public function show($id)
    {
        $restaurant = Restaurant::find($id);
        $restaurant->products = $restaurant->products;
        return response()->json($restaurant);
    }

    public function create(Request $request)
    {
        $input = $request->all();
        $restaurant = Restaurant::create($input);
        return $restaurant;
    }
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $restaurant = Restaurant::find($id);
        $restaurant->update($input);
        return response()->json(compact('restaurant'));
    }

    public function destroy($id)
    {
        $restaurant = Restaurant::find($id);
        $restaurant->delete();
        return response()->json(['msg' => true]);
    }
}
