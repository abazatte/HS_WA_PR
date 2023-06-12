<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Shipmodel extends Model
{
    function manufacturer()
    {
        return $this->belongsTo(Manufacturer::class);
    }
}