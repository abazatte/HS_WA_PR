<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ships', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->unsignedInteger('year')->default(2000);
            $table->string('shipclass')->nullable();
            $table->float('length_m')->default(0.0);
            $table->unsignedSmallInteger('numberofmast')->default(1);
            $table->date('maiden_voyage')->nullable();
            $table->float('brt')->default(0.0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ships');
    }
};
