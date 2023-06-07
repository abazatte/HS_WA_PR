@extends('layouts.layout')

@section('content')
        <h1>Schiff bearbeiten</h1>
        @include('snippets.error')

        {{ html()->modelForm($entity, 'POST', url('shipmodels/update/'.$entity->id))->open() }}
            {{ html()->text('name')->class('form-control')->placeholder('Modellname...') }}
            <br/>
            {{ html()->number('rating')->class('form-control')->placeholder('Bewertung') }}
            <br/>
            {{ html()->number('year_invention')->class('form-control')->placeholder('Erfindungsjahr') }}
            <br/>
            {{ html()->submit('Speichern')->class('btn btn-success') }}
            <a href="{{url('shipmodels')}}" class="btn btn-danger">Abbrechen</a>

        {{ html()->closeModelForm() }}

@endsection
