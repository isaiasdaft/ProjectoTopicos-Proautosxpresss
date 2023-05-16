<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reparto extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table= 'reparto';
    protected $fillable = [
    'ruta',
    'MatriculaAuto',
    'tiempomin',
    'dia',
    'hora',
    ];

    
}
