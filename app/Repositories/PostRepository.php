<?php

namespace App\Repositories;

use App\Models\Post;
use App\Constants\PostConstants;
use Illuminate\Database\Eloquent\Collection;

class PostRepository
{
    /**
     * Filters to apply to the post query.
     */
    protected $filters = [
        'min_salary' => 0,
        'type' => PostConstants::ANY
    ];

    /**
     * Search term to apply to the post query.
     */
    protected $search = null;

    /**
     * Apply filters to the repository.
     * 
     * @param array $filters
     * @return self
     */
    public function setFilters(array $filters): self
    {
        $this->filters = array_merge($this->filters, $filters);

        return $this;
    }

    /**
     * Set the search term for the repository.
     *
     * @param string|null $search
     * @return self
     */
    public function setSearch(string|null $search): self
    {
        $this->search = $search;
        return $this;
    }

    /**
     * Get all posts.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllWithCompany(): Collection
    {
        return Post::query()
            ->select('id', 'title', 'salary', 'location', 'type', 'company_id', 'created_at')
            ->search($this->search)
            ->filter($this->filters)
            ->with([
                'company' => function ($query) {
                    $query->select('id', 'name');
                }
            ])->get();
    }
}