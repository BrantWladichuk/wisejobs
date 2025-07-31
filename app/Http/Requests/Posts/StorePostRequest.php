<?php

namespace App\Http\Requests\Posts;

use Illuminate\Validation\Rule;
use App\Constants\PostConstants;
use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string'],
            'salary' => ['required', 'numeric', 'min:0'],
            'type' => ['required', 'string', Rule::in([
                PostConstants::IN_PERSON, 
                PostConstants::REMOTE
            ])],
            'location' => ['required', 'string', 'max:255']
        ];
    }
}
