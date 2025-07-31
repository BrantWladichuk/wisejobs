<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\{
    CompanyRepository,
    PostRepository
};
use App\Http\Requests\Posts\StorePostRequest;

class PostController extends Controller
{
    public function __construct(
        protected PostRepository $postRepository,
        protected CompanyRepository $companyRepository
    ){}

    /**
     * Display a listing of the posts.
     *
     * @param int $company_id
     * @return \Inertia\Response
     */
    public function index($company_id)
    {
        $company = $this->companyRepository->getWithPostsById($company_id);

        abort_unless($company, 404);

        return Inertia::render('admin/posts/index', compact('company'));
    }

    /**
     * Show the form for creating a new post.
     *
     * @param int $company_id
     * @return \Inertia\Response
     */
    public function create($company_id)
    {
        $company = $this->companyRepository->getById($company_id);

        abort_unless($company, 404);

        return Inertia::render('admin/posts/create', compact('company'));
    }

    /**
     * Store a newly created post in storage.
     *
     * @param \App\Http\Requests\Posts\StorePostRequest $request
     * @param int $company_id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StorePostRequest $request, $company_id)
    {
        $company = $this->companyRepository->getById($company_id);

        abort_unless($company, 404);

        $this->postRepository->create(
            array_merge(
                $request->validated(), 
                ['company_id' => $company_id]
            )
        );

        return redirect()->route('posts.index', ['company_id' => $company_id])->with('success', 'Post created successfully.');
    }

    /**
     * Display the specified post.
     *
     * @param int $id
     * @return \Inertia\Response
     */
    public function show($company_id, $id)
    {
        $post = $this->postRepository->getById($id);

        abort_unless($post, 404);

        return Inertia::render('admin/posts/show', compact('post'));
    }

    /**
     * Update the specified post in storage.
     *
     * @param \App\Http\Requests\Posts\StorePostRequest $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function save(StorePostRequest $request, $company_id, $id)
    {
        $this->postRepository->update(
            $id,
            $request->validated()
        );

        return redirect()->route('posts.show', ['company_id' => $company_id, 'id' => $id])->with('success', 'Post updated successfully.');
    }

    /**
     * Remove the specified post from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($company_id, $id)
    {
        $this->postRepository->delete($id);

        return redirect()->route('posts.index', ['company_id' => $company_id])->with('success', 'Post deleted successfully.');
    }
}