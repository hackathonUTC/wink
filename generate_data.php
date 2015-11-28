<?php

require 'vendor/autoload.php';

$faker = Faker\Factory::create('fr_FR');

$files = new DirectoryIterator('EDT');

foreach ($files as $file) {
    if ($file->getExtension() !== 'edt') {
        continue;
    }

    $student = [
        'login' => '',
        'name' => '',
        'branch' => '',
        'uvs' => [],
    ];

    $content = file_get_contents('EDT/abertolo.edt'); //$file->getPathname());

    $lines = array_values(array_filter(explode("\n", $content), function($item) { return strlen(trim($item)) !== 0; }));
    $header = array_values(array_filter(explode(' ', $lines[1]), function($item) { return ! empty($item); }));

    $student['login'] = $header[0];
    $student['branch'] = $header[1];

    unset($lines[count($lines) - 1]);
    unset($lines[0]);
    unset($lines[1]);
    unset($lines[2]);

    $uvs = $lines;

    foreach ($uvs as $uv) {
        $uv = array_values(array_filter(explode(' ', $uv), function($item) { return ! empty($item); }));

        $student['uvs'][] = [
            'name' => $uv[0],
            'key' => $uv[0] . '-' . ((strlen($uv[2]) === 1) ? $uv[1] . $uv[2] : $uv[1]),
        ];
    }

    var_dump($student);
    exit;
}
