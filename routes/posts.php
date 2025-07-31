<?php

use Inertia\Inertia;
use App\Http\Middleware\Admin;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\PostController;

Route::middleware(Admin::class)
    ->prefix('admin/companies/{company_id}/posts')
    ->group(function () {
        Route::get('/', [PostController::class, 'index'])->name('posts.index');
        Route::get('create', [PostController::class, 'create'])->name('posts.create');
        Route::post('/', [PostController::class, 'store'])->name('posts.store');
        Route::get('/{id}', [PostController::class, 'show'])->name('posts.show');
        Route::put('/{id}', [PostController::class, 'save'])->name('posts.save');
        Route::delete('/{id}', [PostController::class, 'destroy'])->name('posts.destroy');
    });


