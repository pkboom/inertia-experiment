<?php

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/dashboard/inertia', function () {
    return view('dashboard', [
        'page' => [
            'component' => 'Inertia',
            'url' => '/'.Request::path(),
        ],
    ]);
});

Route::get('/dashboard/app', function () {
    return Inertia::render('App', [
        'restaurants' => 'this',
    ]);
});
Route::get('/dashboard/app2', function () {
    return Inertia::render('App2', [
        'restaurants' => 'this',
    ]);
});
