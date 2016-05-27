<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Product;


class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function show($id)
    {
      return Product::findOrFail($id);
    }

    public function create(Request $request)
    {
      $input = (object)$request->all();
      $product = new Product;
      $product->name = $input->name;
      $product->price = $input->price;
      $product->description = $input->description;
      $product->save();
      return response()->json(compact('product'));
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $product = Product::find($id);
        $product->update($input);
        $product->save();
        return response()->json(compact('product'));
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        return response()->json(['msg' => true]);
    }
}
