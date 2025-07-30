<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Repositories\CompanyRepository;

class CompanyController extends Controller
{
    public function __construct(
        protected CompanyRepository $companyRepository
    ){}

    public function index(Request $request)
    {
        return Inertia::render('companies/index', [
            'companies' => $this->companyRepository->getAll(),
        ]);
    }
}
