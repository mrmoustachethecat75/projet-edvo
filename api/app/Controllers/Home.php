<?php

namespace App\Controllers;

use App\Controllers\Controller;


class Home extends Controller
{
    public function getHome($request, $response){
        $data = array('message' => 'Welcome to the Api');
		return $response->withHeader('Content-Type', 'application/json')
			->withJson($data, 201);
    }
   
    
}