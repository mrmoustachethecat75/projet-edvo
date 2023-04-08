<?php

require __DIR__.'/../vendor/autoload.php';

require __DIR__.'/../configs/settings.php';

$app = new Slim\App($settings);

$container = $app->getContainer();

require __DIR__.'/dependencies.php';

require __DIR__.'/../routes/routes.php';