<?php

use Inertia\Inertia;
use App\Http\Middleware\Admin;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\PasswordController;

Route::middleware(Admin::class)->group(function () {
    Route::get('admin/companies', [CompanyController::class, 'index'])->name('companies.index');
});
