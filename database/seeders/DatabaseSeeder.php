<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class
        ]);

        User::factory()
            ->admin()
            ->create([
                'name' => 'Mr. Wise',
                'email' => 'wiseguy@wisejobs.com',
                'password' => 'w1$3j0b$',
            ]);

        User::factory(10)->create();
    }
}
