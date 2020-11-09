<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class CodeValues extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('code_values')->insert([
            'codes_id' => '100',
            'name' => "AppAdmin",
            'desc' => "StoneRack application administrator role",
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        DB::table('code_values')->insert([
            'codes_id' => '100',
            'name' => "OrgAdmin",
            'desc' => "Individual Organization administrator role",
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        DB::table('code_values')->insert([
            'codes_id' => '100',
            'name' => "SalesPerson",
            'desc' => "Organization Sales Representative role",
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        DB::table('code_values')->insert([
            'codes_id' => '100',
            'name' => "Delivaryperson",
            'desc' => "Organization Delivary Person role",
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
        DB::table('code_values')->insert([
            'codes_id' => '100',
            'name' => "DailyWageLabour",
            'desc' => "Organization Daily Labour role",
            "created_at" => Carbon::now(),
            "updated_at" => Carbon::now()
        ]);
    }
}
