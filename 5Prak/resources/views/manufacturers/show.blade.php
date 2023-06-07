@extends('layouts.layout')

@section('content')
    <h1>Das Schiff "{{ $entity->name}}"</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Ort</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $entity->name}}</td>
                <td>{{ $entity->location}}</td>
            </tr>   
        </tbody>
    </table>
@endsection
