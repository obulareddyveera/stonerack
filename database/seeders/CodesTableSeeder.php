<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CodesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('codes')->insert([
            'codes_id' => '100',
            'name' => "Roles",
            'desc' => "Application Roles",
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
    }
}
