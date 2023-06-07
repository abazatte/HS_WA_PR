@extends('layouts.layout')

@section('content')
        <h1>Hersteller hinzufügen</h1>
        @include('snippets.error')

        {{ html()->form('POST', url('/manufacturers/save'))->open() }}
            {{ html()->text('name')->class('form-control')->placeholder('Herstellername...') }}
            <br/>
            {{ html()->text('location')->class('form-control')->placeholder('Ort...') }}
            <br>
            {{ html()->submit('Speichern')->class('btn btn-success') }}
            <a href="{{url('manufacturers')}}" class="btn btn-danger">Abbrechen</a>

        {{ html()->form()->close() }}
@endsection
