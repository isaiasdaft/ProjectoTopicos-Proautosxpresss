<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tienda extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table= 'tienda';
    protected $fillable = [
    'nombre',
    'direccion',
    'CP',
    'tipo',
    'ima',
    'arribo',
    ];
}
