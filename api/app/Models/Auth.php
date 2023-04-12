<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Auth extends Model
{
    protected $table = 'auth';
    protected $fillable = [
        'id',
        'auth_ident',
        'auth_pass'
    ];
}

class AuthId extends Model
{
    protected $table = 'auth';

    protected $fillable = [
        'id',
    ];
}

