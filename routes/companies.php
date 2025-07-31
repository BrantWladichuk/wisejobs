<?php

use Inertia\Inertia;
use App\Http\Middleware\Admin;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\PasswordController;

Route::middleware(Admin::class)
    ->prefix('admin/companies')
    ->group(function () {
        Route::get('/', [CompanyController::class, 'index'])->name('companies.index');
        Route::get('create', [CompanyController::class, 'create'])->name('companies.create');
        Route::post('/', [CompanyController::class, 'store'])->name('companies.store');
        Route::get('/{id}', [CompanyController::class, 'show'])->name('companies.show');
        Route::put('/{id}', [CompanyController::class, 'save'])->name('companies.save');
        Route::delete('/{id}', [CompanyController::class, 'destroy'])->name('companies.destroy');
});
