<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\Residents;


class ResidentsController extends Controller
{

    public function getResidents($request, $response)
    {
        $residents = Residents::all([
       'id',
        'resident_name',
        'resident_phone',
        'resident_date',
        'resident_picture',
        'resident_genre',
        'resident_status']);
        return $response->withHeader('Content-Type', 'application/json')
               ->withJson($residents, 200);
    }

    public function getResident($request, $response)
    {
        $id = $request->getAttribute('id');
        $residents = Residents::all([
            'id',
            'resident_name',
            'resident_phone',
            'resident_date',
            'resident_picture',
            'resident_genre',
            'resident_status']);
        $data = $residents->find($id);
        return $response->withHeader('Content-Type', 'application/json')
         ->withJson($data, 200);
    }

    public function deleteResident($request, $response, $args)
    {
        $id = $request->getAttribute('id');
        $resident = Residents::all([
            'id',
            'resident_name',
            'resident_phone',
            'resident_date',
            'resident_picture',
            'resident_genre',
            'resident_status']);
        $data = $resident->find($id);
        $data = $data->delete();
            return $response->withHeader('Content-Type', 'application/json')
            ->withJson($data, 200);
    }

    public function updateResident($request, $response, $args)
    {
        $id = $request->getAttribute('id');
        $resident = Residents::all([
            'id',
            'resident_name',
            'resident_phone',
            'resident_date',
            'resident_picture',
            'resident_genre',
            'resident_status']);
        $data = $resident->find($id);
        if (!empty($request->getParam('resident_name',))) {
            $data->resident_name = $request->getParam('resident_name');
        }
        if (!empty($request->getParam('resident_phone',))) {
            $data->resident_phone = $request->getParam('resident_phone');
        }
        if (!empty($request->getParam('resident_genre',))) {
            $data->resident_genre = $request->getParam('resident_genre');
        }
        if (!empty($request->getParam('resident_status',))) {
            $data->resident_status = $request->getParam('resident_status');
        }
        if (!empty($request->getParam('resident_date'))){
            $data->resident_date = $request->getParam('resident_date');
        }
        if (!empty($request->getParam('resident_picture'))) {
            $residentsPicture = $request->getParam('resident_picture');
            if ($residentsPicture != null) {
                if (strpos($residentsPicture, 'data:image/png;base64,') === 0) {
                    $fichierPicture = base64_decode(substr($request->getParam('resident_picture'), 22));
                    $ext = ".png";
                } elseif (strpos($residentsPicture, 'data:image/jpg;base64,') === 0) {
                    $fichierPicture = base64_decode(substr($request->getParam('resident_picture'), 22));
                    $ext = ".jpg";
                } elseif (strpos($residentsPicture, 'data:image/jpeg;base64,') === 0) {
                    $fichierPicture = base64_decode(substr($request->getParam('resident_picture'), 23));
                    $ext = ".jpeg";
                }
                $filenamePathLogo = $request->getPAram('resident_name');
                $filenamePicture = $filenamePathLogo . $ext;
                $oldfile = '/var/www/projets-web/projet-edvo/application-edvo-v-1.5/front/img/picture-resident/'.$filenamePicture;
                @unlink($oldfile);
                file_put_contents('/var/www/projets-web/projet-edvo/application-edvo-v-1.5/front/img/picture-resident/'.$filenamePicture, $fichierPicture);
            }else {
                $filenamePicture = $oeuvre->resident_picture;
            }
        }
        
        if (!empty($request->getParam('resident_phone',))) {
            $data->resident_phone = $request->getParam('resident_phone',);
        }
        if (!empty($request->getParam('resident_status',))) {
            $data->resident_status = $request->getParam('resident_status',);
        }
        $data->save();
        return $response->withHeader('Content-Type', 'application/json')
        ->withJson($data, 200);
    }

    public function addResident($request, $response, $args)
    {   
        $residentsPicture = $request->getParam('resident_picture');
        
        if (strpos($residentsPicture, 'data:image/png;base64,') === 0) {
            $fichierPicture = base64_decode(substr($request->getParam('resident_picture'), 22));
            $ext = ".png";
        } elseif (strpos($residentsPicture, 'data:image/jpg;base64,') === 0) {
            $fichierPicture = base64_decode(substr($request->getParam('resident_picture'), 22));
            $ext = ".jpg";
        } elseif (strpos($residentsPicture, 'data:image/jpeg;base64,') === 0) {
            $fichierPicture = base64_decode(substr($request->getParam('resident_picture'), 23));
            $ext = ".jpeg";
        }
        $filenamePathLogo = $request->getPAram('resident_name');
        $filenamePicture = $filenamePathLogo . $ext;
        file_put_contents('/var/www/projets-web/projet-edvo/application-edvo-v-1.5/front/img/picture-resident/' . $filenamePicture, $fichierPicture);
         
   
        $action = Residents::create([
            'resident_name' => $request->getParam('resident_name'),
            'resident_genre' => $request->getParam('resident_genre'),
            'resident_date' => $request->getParam('resident_date'),
            'resident_picture' => $filenamePicture,
            'resident_phone' => $request->getParam('resident_phone'),
            'resident_status' => $request->getParam('resident_status'),
            ]);
       
        $data = array('message' => 'Residents registered with success.');
        return $response->withHeader('Content-Type', 'application/json')
            ->withJson($data, 201);
        
    }
}