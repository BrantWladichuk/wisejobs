<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\CompanyRepository;
use App\Http\Requests\Companies\StoreCompanyRequest;

class CompanyController extends Controller
{
    public function __construct(
        protected CompanyRepository $companyRepository
    ){}

    /**
     * Display a listing of the companies.
     * 
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('admin/companies/index', [
            'companies' => $this->companyRepository->getAll(),
        ]);
    }

    /**
     * Show the form for creating a new company.
     * 
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('admin/companies/create');
    }

    /**
     * Store a newly created company in storage.
     * 
     * @param  \App\Http\Requests\Companies\StoreCompanyRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreCompanyRequest $request)
    {
        $company = $this->companyRepository->create(
            $request->validated()
        );

        return redirect()->route('companies.index')->with('success', 'Company created successfully.');
    }

    /**
     * Display the specified company.
     * 
     * @param  int $id
     * @return \Inertia\Response
     */
    public function show(int $id)
    {
        $company = $this->companyRepository->getById($id);

        abort_unless($company, 404, 'Company not found.');

        return Inertia::render('admin/companies/show', compact('company'));
    }

    /**
     * Update the specified company in storage.
     * 
     * @param  \App\Http\Requests\Companies\StoreCompanyRequest $request
     * @param  int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function save(StoreCompanyRequest $request, int $id)
    {
        $company = $this->companyRepository->update(
            $id,
            $request->validated()
        );

        return redirect()->route('companies.show', ['id' => $id])->with('success', 'Company updated successfully.');
    }

    /**
     * Remove the specified company from storage.
     * 
     * @param  int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(int $id)
    {
        $company = $this->companyRepository->getById($id);

        abort_unless($company, 404, 'Company not found.');

        $company->delete();

        return redirect()->route('companies.index')->with('success', 'Company deleted successfully.');
    }
}
