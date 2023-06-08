<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ship;
use App\Models\Shipmodel;

class ShipController extends Controller
{   
    protected $className = 'App\Models\Ship';
    protected $entityName = 'ships';
    protected $fields = ['name', 'year', 'shipclass', 'length_m', 'numberofmast', 'maiden_voyage', 'brt', 'shipmodel_id'];
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

    public function getAdd() {
        return view($this->entityName.'.add')->with('shipmodels', Shipmodel::all());
    }

    public function getEdit($id)
    {
        $class = $this->className;
        $entity = $class::find($id);
        if ($entity)
        {
            return view($this->entityName.'.edit')->with('entity', $entity)->with('shipmodels', Shipmodel::all());
        }
        return redirect($this->entityName.'/index');
    }
}
