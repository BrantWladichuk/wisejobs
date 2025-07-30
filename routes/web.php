<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;
use App\Http\Middleware\Admin;

Route::get('/', [PostController::class, 'index'])->name('posts.index');

Route::middleware(Admin::class)->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/companies.php';
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
