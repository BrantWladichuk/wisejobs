<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Repositories\PostRepository;

class PostController extends Controller
{
    public function __construct(
        protected PostRepository $postRepository
    ){}

    public function index(Request $request)
    {
        return Inertia::render('posts/index', [
            'posts' => $this->postRepository->getAllWithCompany()
        ]);
    }
}
