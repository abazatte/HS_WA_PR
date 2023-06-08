@extends('layouts.layout')

@section('content')
        <h1>Schiff hinzufügen</h1>
        @include('snippets.error')

        {{ html()->form('POST', url('/shipmodels/save'))->open() }}
            {{ html()->text('name')->class('form-control')->placeholder('Modellname...') }}
            <br/>
            {{ html()->number('rating')->class('form-control')->placeholder('Bewertung') }}
            <br/>
            {{ html()->number('year_invention')->class('form-control')->placeholder('Erfindungsjahr') }}
            <br/>
            <select name="manufacturer_id" class="form-select">
            @foreach($manufacturers as $manufacturer)
                <option value="{{ $manufacturer->name }}">{{ $manufacturer->id }} {{ $manufacturer->name }}</option>  
            @endforeach
            </select>
            <br>
            {{ html()->submit('Speichern')->class('btn btn-success') }}
            <a href="{{url('shipmodels')}}" class="btn btn-danger">Abbrechen</a>

        {{ html()->form()->close() }}
@endsection
