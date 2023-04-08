<?php


namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\Auth;
use \Firebase\JWT\JWT;

require '/var/www/projets-web/projet-edvo/application-edvo-v-1.5/api/configs/settings.php';
define('EXPIRETOKEN', $settings['settings']['tokenExpireInHour']);
define('KEYTOKEN', $settings['settings']['jwtKey']);





class AuthController extends Controller
{
public function signUpAuth($request, $response, $args)
	{
		if (!empty($request->getParam('auth_ident')) && !empty($request->getParam('auth_pass'))) {
			$auth = Auth::where('auth_ident', $request->getParam('auth_ident'))->count();
			if ($request->getParam('auth_pass') != $request->getParam('auth_pass_confirm')) {
				$data = array('message' => 'les deux password ne sont pas identique.');
				return $response->withHeader('Content-Type', 'application/json')
					->withJson($data, 401);
			}else {
				$action = Auth::create([
					'auth_ident' => $request->getParam('auth_ident'),
					'auth_pass' => password_hash($request->getParam('auth_pass'), PASSWORD_BCRYPT, ['cost' => 13,]),
					'auth_pass_confirm' => $request->getParam('auth_pass_confirm'),
				]);
				if ($action) {
					$now_seconds = time();
					$token = array(
						// "iss" => "http://localhost/api-jobroom/",
						// "aud" => "http://localhost:3000",
						"nbf" => 1357000000,
						"iat" => $now_seconds,
						"exp" => $now_seconds + (60 * 60 * EXPIRETOKEN),
						"data" => [
							"AuthId" => $action['id'],
							"auth_ident" => $action['auth_ident'],
						],
					);
					$jwt = JWT::encode($token, KEYTOKEN, 'HS256');
					$data = array('message' => 'Utilisateur enregistré avec success.', 'token' => $jwt);
					return $response->withHeader('Content-Type', 'application/json')
						->withJson($data, 201);
				} else {
					$data = array('message' => 'Une erreur est survenue lors de l\'inscription.');
				}
				return $response->withHeader('Content-Type', 'application/json')
					->withJson($data, 204);
			}
		} else {
			$data = array('message' => 'Un ou plusieurs champs sont vides');
			return $response->withHeader('Content-Type', 'application/json')
				->withJson($data, 205);
		}
	}
  
    public function signInAuth($request, $response, $args)
	{
		// $tokenAuth = $request->getHeader('Authorization');
		
		if (Auth::where('auth_ident', $request->getParam('auth_ident'))->count() == 1) {
			$auth = Auth::where('auth_ident', $request->getParam('auth_ident'))->first();
			if (password_verify($request->getParam('auth_pass'), $auth->auth_pass)) {
                $now_seconds = time();
				$token = array(
					// "iss" => "http://localhost:8080/api/",
					// "aud" => "http://localhost:3000",
					"nbf" => 1357000000,
					"iat" => $now_seconds,
					"exp" => $now_seconds + (60 * 60 * EXPIRETOKEN),
					"data" => [
						"AuthId" => $auth["id"],
						"auth_ident" => $auth['auth_ident'],
						],
					);
                    $jwt = JWT::encode($token, KEYTOKEN, 'HS256');
				$data = array('message' => 'conexion ok', 'token' => $jwt);
				return $response->withHeader('Content-Type', 'application/json')
					->withJson($data, 200);
			} else {
				$data = array('status' => 'auth_password incorrect');
				return $response->withHeader('Content-Type', 'application/json')
					->withJson($data, 401);
			}
		} else {
			$data = array('status' => 'Utilisateur introuvable');
			return $response->withHeader('Content-Type', 'application/json')
				->withJson($data, 301);
		}
	}
}
