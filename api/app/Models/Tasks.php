<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    protected $table = 'tasks';
    protected $fillable = [
        'id',
        'week_tasks',
        'tab_cuisine',
        'tab_gt',
        'tab_salle',
        'tab_couloir',
        'tab_cave',
        'tab_poubelle',
        'tab_wc',
        'tab_frigo', 
        'tab_ramasse',
        'tab_ext',   
        'tab_nb_tasks',     
        'created_at',
    ];
}

class TasksId extends Model
{
    protected $table = 'tasks';

    protected $fillable = [
        'id',
    ];
}