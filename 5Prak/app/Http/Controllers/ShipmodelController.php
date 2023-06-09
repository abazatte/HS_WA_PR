<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shipmodel;
use App\Models\Manufacturer;

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
//
    public function getShow($id)
    {
        $class = $this->className;
        $entity = $class::find($id);
        if ($entity)
        {
            return view($this->entityName.'.show')->with('entity', $entity)->with('manufacturer',Manufacturer::find($entity->manufacturer_id));
        }
        return redirect($this->entityName.'/index');
    }

    public function getAdd() {
        return view($this->entityName.'.add')->with('manufacturers', Manufacturer::all());
    }

    public function getEdit($id)
    {
        $class = $this->className;
        $entity = $class::find($id);
        if ($entity)
        {
            return view($this->entityName.'.edit')->with('entity', $entity)->with('manufacturers', Manufacturer::all());
        }
        return redirect($this->entityName.'/index');
    }
}
