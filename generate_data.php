<?php

require 'vendor/autoload.php';

$faker = Faker\Factory::create('fr_FR');

$files = new DirectoryIterator('EDT');

foreach ($files as $file) {
    echo $file->getBasename('.edt') . "\n";
}
