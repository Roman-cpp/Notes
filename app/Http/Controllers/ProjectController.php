<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectCreateRequest;
use App\Models\Project;


class ProjectController extends Controller
{
    public function index()
    {
        return view('project.index', ['projects' => Project::all()]);
    }

    public function store(ProjectCreateRequest $request)
    {
        Project::create($request->validated());
    }

    public function update()
    {

    }

    public function destroy()
    {

    }
}
