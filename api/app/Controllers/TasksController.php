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
        ]);
        return $response->withHeader('Content-Type', 'application/json')
               ->withJson($tasks, 200);
    }
    public function getTask($request, $response)
    {
        $id = $request->getAttribute('id');
        $tasks = Tasks::all([
            'id',
            'week_tasks']);
        $data = $tasks->find($id);
        return $response->withHeader('Content-Type', 'application/json')
         ->withJson($data, 200);
    }
    public function deleteTask($request, $response, $args)
    {
        $id = $request->getAttribute('id');
        $resident = Tasks::all([
            'id',
            'week_tasks']);
        $data = $resident->find($id);
        $data = $data->delete();
            return $response->withHeader('Content-Type', 'application/json')
            ->withJson($data, 200);
    }
    public function updateTask($request, $response, $args)
    {
        $id = $request->getAttribute('id');
        $resident = Tasks::all([
            'id',
            'week_tasks']);
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
        $data = $request->getParam('week_tasks');
        $dataJson = json_encode($data);
        var_dump($data);
        var_dump($dataJson);
        $action = Tasks::create([
            'week_tasks' => $request->getParam('week_tasks')
            ]);
       
        $data = array('message' => 'Tasks registered with success.');
        return $response->withHeader('Content-Type', 'application/json')
            ->withJson($data, 201);
        
    }
}