<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/', [PostController::class, 'index'])->name('home');
Route::get('/job/{id}', [PostController::class, 'show'])->name('job');

require __DIR__.'/companies.php';
require __DIR__.'/posts.php';
require __DIR__.'/auth.php';
