<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\Tasks;


class TasksController extends Controller
{
    public function getTasks($request, $response)
    {
        $tasks = Tasks::all([
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
        ]);
        return $response->withHeader('Content-Type', 'application/json')
               ->withJson($tasks, 200);
    }
    public function getTask($request, $response)
    {
        $id = $request->getAttribute('id');
        $tasks = Tasks::all([
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
        ]);
        $data = $tasks->find($id);
        return $response->withHeader('Content-Type', 'application/json')
         ->withJson($data, 200);
    }
    public function deleteTask($request, $response, $args)
    {
        $id = $request->getAttribute('id');
        $tasks = Tasks::all([
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
        ]);
        $data = $resident->find($id);
        $data = $data->delete();
            return $response->withHeader('Content-Type', 'application/json')
            ->withJson($data, 200);
    }
    public function updateTask($request, $response, $args)
    {
        $id = $request->getAttribute('id');
        $tasks = Tasks::all([
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
        ]);
        $data = $resident->find($id);
        if (!empty($request->getParam('week_tasks',))) {
            $data->resident_name = $request->getParam('week_tasks');
        }
        $data->save();
        return $response->withHeader('Content-Type', 'application/json')
        ->withJson($data, 200);
    }

    public function addTask($request, $response, $args)
    {   
        $action = Tasks::create([
            'week_tasks' => $request->getParam('week_tasks'),
            'tab_cuisine'=> $request->getParam('tab_cuisine'),
            'tab_salle'=> $request->getParam('tab_salle'),
            'tab_gt' => $request->getParam('tab_gt'),
            'tab_couloir'=> $request->getParam('tab_couloir'),
            'tab_cave'=> $request->getParam('tab_cave'),
            'tab_poubelle'=> $request->getParam('tab_poubelle'),
            'tab_wc'=> $request->getParam('tab_wc'),
            'tab_frigo'=> $request->getParam('tab_frigo'), 
            'tab_ramasse'=> $request->getParam('tab_ramasse'),
            'tab_nb_tasks' => $request->getParam('tab_nb_tasks'),
            'tab_ext'=> $request->getParam('tab_ext')
            ]);
       
        $data = array('message' => 'Tasks registered with success.');
        return $response->withHeader('Content-Type', 'application/json')
            ->withJson($data, 201);
        
    }
}