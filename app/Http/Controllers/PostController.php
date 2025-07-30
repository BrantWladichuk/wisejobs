<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Constants\PostConstants;
use App\Repositories\PostRepository;
use App\Http\Requests\Posts\GetPostsRequest;

class PostController extends Controller
{
    public function __construct(
        protected PostRepository $postRepository
    ){}

    /**
     * Display a listing of the posts.
     *
     * @param GetPostsRequest $request
     * @return \Inertia\Response
     */
    public function index(GetPostsRequest $request)
    {
        return Inertia::render('posts/index', [
            'posts' => $this
                ->postRepository
                ->setSearch($request->search)
                ->setFilters([
                    'min_salary' => $request->minSalary,
                    'type' => $request->postType,
                ])
                ->getAllWithCompany(),
            'filters' => [
                'search' => $request->input('search', ''),
                'minSalary' => $request->input('minSalary', 0),
                'postType' => $request->input('postType', PostConstants::ANY),
            ],
        ]);
    }

    /**
     * Show a specific post.
     *
     * @param int $id
     * @return \Inertia\Response
     */
    public function show($id)
    {
        return Inertia::render('posts/show', [
            'post' => $this
                ->postRepository
                ->getById($id)
        ]);
    }
}
