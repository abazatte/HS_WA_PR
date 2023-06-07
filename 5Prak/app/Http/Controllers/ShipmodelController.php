<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ship;

class ShipmodelController extends Controller
{   
    protected $className = 'App\Models\Shipmodel';
    protected $entityName = 'shipmodels';
    protected $fields = ['manufacturer_id', 'name', 'rating', 'year_invention'];
    protected $validation = [
        'name' => 'required',
        'rating' => 'required|numeric',
        'year_invention' => 'required|numeric'
    ];
    //
}
