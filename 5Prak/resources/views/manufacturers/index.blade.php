@extends('layouts.layout')

@section('content')
        <h1>Alle Hersteller</h1>
        {{ $entities->links() }}
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>BRT</th>
                    <th>Jahr</th>
                    <th>Klasse</th>
                    <th>Länge in m</th>
                    <th>Anzahl Mast</th>
                    <th>Jungfernfahrt</th>
                    <th>Bearbeiten</th>
                </tr>
            </thead>
            <tbody>
                @foreach($entities as $index=>$ship)
                    <tr>
                        <td>{{ $ship->name}}</td>
                        <td>{{ $ship->brt}}</td>
                        <td>{{ $ship->year}}</td>
                        <td>{{ $ship->shipclass}}</td>
                        <td>{{ $ship->length_m}}</td>
                        <td>{{ $ship->numberofmast}}</td>
                        <td>{{ $ship->maiden_voyage}}</td>
                        <td>
                            <a href="{{url('ships/show/'.$ship->id)}}" class="btn btn-success">Show</a>
                            <a href="{{url('ships/edit/'.$ship->id)}}" class="btn btn-success">Edit</a>
                            <a href="{{url('ships/delete/'.$ship->id)}}" class="btn btn-danger">Del</a>
                        </td>
                    </tr>   
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td>
                        <a href="{{url('ships/add')}}" class="btn btn-success">Add</a>
                    </td>
                </tr>   
            </tfoot>
        </table>
        {{ $entities->links() }}
@endsection 