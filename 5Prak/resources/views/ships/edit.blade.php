@extends('layouts.layout')

@section('content')
        <h1>Schiff bearbeiten</h1>
        @include('snippets.error')

        {{ html()->modelForm($entity, 'POST', url('ships/update/'.$entity->id))->open() }}
            {{ html()->text('name')->class('form-control')->placeholder('Schiffsname...') }}
            <br/>
            {{ html()->text('brt')->class('form-control')->placeholder('BRT...') }}
            <br/>
            {{ html()->number('year')->class('form-control')->placeholder('Jahr') }}
            <br/>
            {{ html()->text('shipclass')->class('form-control')->placeholder('Schiffklasse') }}
            <br/>
            {{ html()->number('length_m')->class('form-control')->placeholder('Länge in m') }}
            <br/>
            {{ html()->number('numberofmast')->class('form-control')->placeholder('Anzahl Mäste') }}
            <br/>
            {{ html()->date('maiden_voyage')->class('form-control')->placeholder('Jungfernfahrt') }}
            <br/>
            <select name="shipmodel_id" class="form-select">
            @foreach($shipmodels as $shipmodel)
                <option value="{{ $shipmodel->id }}">{{ $shipmodel->id }} {{ $shipmodel->name }}</option>  
            @endforeach
            </select>
            <br>
            {{ html()->submit('Speichern')->class('btn btn-success') }}
            <a href="{{url('ships')}}" class="btn btn-danger">Abbrechen</a>

        {{ html()->closeModelForm() }}

@endsection
