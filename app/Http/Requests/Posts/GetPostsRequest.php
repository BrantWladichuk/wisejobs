<?php

namespace App\Http\Requests\Posts;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Constants\PostConstants;

class GetPostsRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'search' => ['nullable', 'string', 'max:255'],
            'minSalary' => ['nullable', 'numeric', 'min:0'],
            'postType' => [
                'nullable', 
                'string', 
                Rule::in([
                    PostConstants::ANY, 
                    PostConstants::IN_PERSON, 
                    PostConstants::REMOTE
                ])
            ],
        ];
    }
}
