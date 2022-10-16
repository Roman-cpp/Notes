<?php

namespace Tests\Feature\models;

use App\Models\Project;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProjdectTest extends TestCase
{
    use DatabaseMigrations;

    public function test_create()
    {
          $project = Project::create(
            [
                'title' => 'test',
            ]
          );

          $this->assertEquals($project->tile, Project::find($project->id)->tile);
    }

}
