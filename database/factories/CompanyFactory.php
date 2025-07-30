<?php

namespace Database\Factories;

use App\Models\{
    Post,
    Company
};
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Configure the factory to create related posts after a company is created.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterCreating(function (Company $company) {
            Post::factory()->count(
                $this->faker->numberBetween(1, 5)
            )->create([
                'company_id' => $company->id,
            ]);
        });
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->company,
            'website' => $this->faker->url
        ];
    }
}
