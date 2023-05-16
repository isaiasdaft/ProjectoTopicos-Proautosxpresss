<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provedores extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table= 'provedores';
    protected $fillable = [
    'name',
    'descripcion',
    'productosK',
    'hora',
    
    ];
}
