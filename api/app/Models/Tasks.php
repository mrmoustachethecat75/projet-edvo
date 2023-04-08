<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    protected $table = 'tasks';
    protected $fillable = [
        'id',
        'week_tasks'
    ];
}

class TasksId extends Model
{
    protected $table = 'tasks';

    protected $fillable = [
        'id',
    ];
}