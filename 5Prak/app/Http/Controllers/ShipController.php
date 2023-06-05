<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ship;

class ShipController extends Controller
{   
    protected $className = 'App\Models\Ship';
    protected $entityName = 'ships';
    protected $fields = ['name', 'year', 'shipclass', 'length_m', 'numberofmast', 'maiden_voyage', 'brt'];
    protected $validation = [
        'name' => 'required',
        'year' => 'required|numeric',
        'shipclass' => 'required',
        'length_m' => 'required|numeric',
        'numberofmast' => 'required|numeric',
        'maiden_voyage' => 'required',
        'brt' => 'required|numeric'
    ];
    //
}
