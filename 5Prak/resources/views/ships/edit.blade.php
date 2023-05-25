@extends('layouts.layout')

@section('content')
        <h1>Schiff bearbeiten</h1>
        @include('snippets.error')

        {{ html()->modelForm($entity, 'POST', url('ships/update/'.$entity->id))->open() }}
            {{ html()->text('name')->class('form-control')->placeholder('Schiffsname...') }}
            <br/>
            {{ html()->text('brt')->class('form-control')->placeholder('BRT...') }}
            <br/>
            {{ html()->submit('Speichern')->class('btn btn-success') }}
            <a href="{{url('ships')}}" class="btn btn-danger">Abbrechen</a>

        {{ html()->closeModelForm() }}

@endsection
