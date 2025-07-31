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

    /**
     * Get a single post by ID.
     *
     * @param int $id
     * @return \App\Models\Post|null
     */
    public function getById(int $id): ?Post
    {
        return Post::with('company')->find($id);
    }

    /**
     * Get posts by company ID.
     */
    public function getPostsByCompanyId(int $company_id): Collection
    {
        return Post::query()
            ->where('company_id', $company_id)
            ->select('id', 'title', 'salary', 'location', 'type', 'created_at')
            ->with('company:id,name')
            ->get();
    }

    /**
     * Create a new post.
     *
     * @param array $data
     * @return \App\Models\Post
     */
    public function create(array $data): Post
    {
        return Post::create($data);
    }

    /**
     * Update an existing post.
     *
     * @param int $id
     * @param array $data
     * @return \App\Models\Post
     */
    public function update(int $id, array $data): Post
    {
        if($post = $this->getById($id)) {
            $post->update($data);
        }

        return $post;
    }

    /**
     * Delete a post by ID.
     *
     * @param int $id
     * @return bool
     */
    public function delete(int $id): bool
    {
        if($post = $this->getById($id)) {
            return $post->delete();
        }
        return false;
    }
}