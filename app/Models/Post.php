<?php

namespace App\Models;

use App\Models\Company;
use App\Constants\PostConstants;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'company_id',
        'title',
        'body',
        'salary',
        'type',
        'location',
    ];

    /**
     * Get the company that owns the post.
     * 
     * @return BelongsTo
     */
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    /**
     * Scope a query to filter posts based on various criteria.
     * 
     * @param array $filters
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilter(Builder $query, array $filters): Builder
    {
        return $query
            ->when($filters['min_salary'] && $filters['min_salary'] > 0, fn($q) => $q->where('salary', '>=', $filters['min_salary']))
            ->when($filters['type'] && $filters['type'] !== PostConstants::ANY, fn($q) => $q->where('type', $filters['type']));
    }

    /**
     * Scope a query to search posts by title, location, or company name.
     * 
     * @param string|null $search
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearch(Builder $query, ?string $search): Builder
    {
        if (!$search) {
            return $query;
        }

        return $query
            ->where('title', 'like', '%' . $search . '%')
            ->orWhere('location', 'like', '%' . $search . '%')
            ->orWhereHas('company', function ($q) use ($search) {
                $q->where('name', 'like', '%' . $search . '%');
            });
    }
}