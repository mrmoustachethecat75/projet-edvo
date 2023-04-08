<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Residents extends Model
{
    protected $table = 'residents';
    protected $fillable = [
        'id',
        'resident_name',
        'resident_phone',
        'resident_date',
        'resident_picture',
        'resident_genre',
        'resident_status'
    ];
}

class ResidentsId extends Model
{
    protected $table = 'residents';

    protected $fillable = [
        'id',
    ];
}