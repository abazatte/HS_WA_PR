@extends('layouts.layout')

@section('content')
        <h1>Das Schiff "{{ $entity->name}}"</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>BRT</th>
                    <th>Jahr</th>
                    <th>Klasse</th>
                    <th>Länge in m</th>
                    <th>Anzahl Mast</th>
                    <th>Jungfernfahrt</th>
                    <th>Shipmodell</th>
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        <td>{{ $entity->id}}</td>
                        <td>{{ $entity->name}}</td>
                        <td>{{ $entity->brt}}</td>
                        <td>{{ $entity->year}}</td>
                        <td>{{ $entity->shipclass}}</td>
                        <td>{{ $entity->length_m}}</td>
                        <td>{{ $entity->numberofmast}}</td>
                        <td>{{ $entity->maiden_voyage}}</td>
                        <td>{{ $entity->shipmodel_id}}</td>
                    </tr>   
                
            </tbody>
        </table>
@endsection
