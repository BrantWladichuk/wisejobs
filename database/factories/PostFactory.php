<?php

namespace Database\Factories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'company_id' => Company::factory(),
            'title' => $this->faker->jobTitle,
            'body' => $this->faker->paragraphs(3, true),
            'salary' => $this->faker->numberBetween(30000, 120000),
            'type' => $this->faker->randomElement(['remote', 'in-person']),
            'location' => $this->faker->city,
        ];
    }
}