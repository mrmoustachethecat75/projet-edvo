<?php

$capsule = new \Illuminate\Database\Capsule\Manager;
$capsule->addConnection($container['settings']['db']);
$capsule->setAsGlobal();
$capsule->bootEloquent();
$container['db'] = function ($container) use ($capsule) {
	return $capsule;
};

$app->add(function ($req, $res, $next) {
	$response = $next($req, $res);
	return $response
		->withHeader('Access-Control-Allow-Origin', '*')
		->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
		->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});


$container['Home'] = function ($container){
	return new App\Controllers\Home($container);
};
$container['ResidentsController'] = function ($container) {
	return new App\Controllers\ResidentsController($container);
};
$container['TasksController'] = function ($container) {
	return new App\Controllers\TasksController($container);
};
$container['AuthController'] = function ($container) {
	return new App\Controllers\AuthController($container);
};





