<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Models\Staff;
use App\Models\Orgs;
use App\Models\OrgStaff;

class StaffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Staff::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function findByGoogleId($googleId)
    {
        Log::info('staff.googleId'.'='.$googleId);
        $query = DB::table('org_staff')
            ->join('staff', function($join) use($googleId){
                $join->on('staff.id', '=', 'org_staff.staff_id')
                     ->where('staff.google_id', '=', $googleId);
            })
            ->join('orgs', 'orgs.id', '=', 'org_staff.orgs_id')
            ->select('staff.*', 'staff.is_active as isActiveStaff', 'orgs.name as orgName', 'orgs.address as orgAddress', 'orgs.code', 'orgs.is_active as isActiveOrg')
            ->get();

        
        if (empty($query) || count($query) == 0) {
            Log::info("Data Not Found");
            return response()->json([], 200);
        } else {
            Log::info('findByGoogleId Respo --== '.$query);
            return response()->json($query[0], 200);
        }
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();

        try {
            Log::info('api/srsl/staff::post --> : '.$request->orgName);
            Log::info('api/srsl/staff::post --> : '.$request->orgAddress);
            Log::info('api/srsl/staff::post --> : '.$request->isNewOrgRequest);
            Log::info('api/srsl/staff::post --> : '.$request->orgCode);

            Log::info('api/srsl/staff::post --> : '.$request->name);
            Log::info('api/srsl/staff::post --> : '.$request->familyName);
            Log::info('api/srsl/staff::post --> : '.$request->givenName);
            Log::info('api/srsl/staff::post --> : '.$request->email);
            Log::info('api/srsl/staff::post --> : '.$request->googleId);
            Log::info('api/srsl/staff::post --> : '.$request->imageUrl);
            Log::info('api/srsl/staff::post --> : '.$request->phone);

            $isActiveStaff = false;

            if ($request->isNewOrgRequest == 1) {
                $uniqid = uniqid().microtime(true);
                Log::info('--> Creating New Organization <--'.$uniqid);

                $org = new Orgs;
                $org->name = $request->orgName;
                $org->address = $request->orgAddress;
                $org->code = str_replace('.', '', $uniqid);
                $org->is_active = false;
                $org->save();

                $isActiveStaff = true;
                Log::info('--> New Organization Created <--'.$org);
            } else {
                Log::info('--> Fetching Existing Organization <--');
                $org = Orgs::firstWhere('code', $request->orgCode);
                Log::info('--> Existing Organization Found <--'.$org);
            }

            $staff = new Staff;
            $staff->name = $request->name;
            $staff->family_name = $request->familyName;
            $staff->given_name = $request->givenName;
            $staff->email = $request->email;
            $staff->google_id = $request->googleId;
            $staff->image_url = $request->imageUrl;
            $staff->phone = $request->phone;
            $staff->is_active = $isActiveStaff;
            $staff->save();

            Log::info('--> Added Organization '.$org);
            Log::info('--> Added New Staff    '.$staff);

            $orgStaff = new OrgStaff;
            $orgStaff->staff_id = $staff->id;
            $orgStaff->orgs_id = $org->id;
            $orgStaff->save();

            Log::info('--> Added New ORGSTAFF '.$orgStaff);

            DB::commit();

        } catch (Exception $e) {
            Log::error('api/srsl/staff::Exception --> : '.$e);
            DB::rollback();
        }

        Log::info('New Staff Member Saved Successfully!!');
        return Staff::all();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
