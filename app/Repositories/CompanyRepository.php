<?php

namespace App\Repositories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Collection;

class CompanyRepository
{
    /**
     * Get all posts.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAll(): Collection
    {
        return Company::query()
            ->select('id', 'name', 'created_at')
            ->withCount('posts')
            ->get();
    }

    /**
     * Create a new company.
     *
     * @param array $data
     * @return \App\Models\Company
     */
    public function create(array $data): Company
    {
        return Company::create($data);
    }

    /**
     * Find a company by its ID.
     *
     * @param int $id
     * @return \App\Models\Company|null
     */
    public function getById(int $id): ?Company
    {
        return Company::find($id);
    }

    /**
     * Update a company.
     *
     * @param int $id
     * @param array $data
     * @return \App\Models\Company
     */
    public function update(int $id, array $data): Company
    {
        if($company = $this->getById($id)) {
            $company->update($data);
        }

        return $company;
    }

    /**
     * Delete a company.
     *
     * @param int $id
     * @return bool
     */
    public function delete(int $id): bool
    {
        if($company = $this->getById($id)) {
            return $company->delete();
        }

        return false;
    }
}