@extends('layouts.layout')

@section('content')
        <h1>Das Modell"{{ $entity->name}}"</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Bewertung</th>
                    <th>Erfindungsjahr</th>
                    <th>Hersteller_ID</th>
                    <th>Herstellername</th>
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                    <td>{{ $entity->id}}</td>
                    <td>{{ $entity->name}}</td>
                    <td>{{ $entity->rating}}</td>
                    <td>{{ $entity->year_invention}}</td>
                    <td>{{ $entity->manufacturer_id}}</td>
                    @if($manufacturer)
                    <td>{{ $manufacturer->name}}</td>
                    @endif
                    </tr>   
                
            </tbody>
        </table>
@endsection
