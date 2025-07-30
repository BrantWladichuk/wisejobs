<?php

namespace App\Repositories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Collection;

class PostRepository
{
    protected $filters = [
        'min_salary' => null,
        'max_salary' => null,
        'location' => null,
        'company' => null,
        'type' => null,
    ];

    /**
     * Get all posts.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllWithCompany(): Collection
    {
        return Post::query()
            ->select('id', 'title', 'salary', 'location', 'company_id', 'created_at')
            ->with([
                'company' => function ($query) {
                    $query->select('id', 'name');
                }
            ])->get();
    }
}