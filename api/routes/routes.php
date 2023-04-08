<?php




use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use \Firebase\JWT\JWT;
use Firebase\JWT\Key;

require __DIR__ . '/../configs/settings.php';
define('JWTKEY', $settings['settings']['jwtKey']);

$app->get('/', 'Home:getHome');
$app->post('/auth/sign-in', 'AuthController:signInAuth');
// $app->post('/auth/sign-up', 'AuthController:signUpAuth');
$app->group('/edvo/api', function () use ($app) {
    $app->group('/resident' , function () use ($app) {
        $app->get('s', 'ResidentsController:getResidents');
        $app->get('/{id}', 'ResidentsController:getResident');
        $app->post('/delete/{id}', 'ResidentsController:deleteResident');
        $app->post('/update/{id}', 'ResidentsController:updateResident');
        $app->post('/add', 'ResidentsController:addResident');
    });
    $app->group('/task' , function () use ($app) {
        $app->get('s', 'TasksController:getTasks');
        $app->get('/{id}', 'TasksController:getTask');
        $app->post('/delete/{id}', 'TasksController:deleteTask');
        $app->post('/update/{id}', 'TasksController:updateTask');
        $app->post('/add', 'TasksController:addTask');
    });
})->add(function ($request, $response, $next) {

    $tokenRequest =  $request->getHeader('Authorization');
   
    if ($tokenAuth === "") {
        return $response->withHeader('Content-Type', 'application/json')
            ->withJson(array("msg" => "no token"), 400);
    } else { 
        try {
            $tokenDecode = JWT::decode($tokenRequest[0], new Key(JWTKEY, 'HS256'));
            $request = $request->withAttribute('test', $tokenDecode->data->auth_ident);
            $response = $next($request, $response);
        } catch (Exception $e) {
            return $response->withHeader('Content-Type', 'application/json')
                ->withJson(array("msg" => "invialid token" . $e->getMessage()), 401);
        }
    }
    return $response;
});



    

   