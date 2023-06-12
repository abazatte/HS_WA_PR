@extends('layouts.layout')

@section('content')
        <h1>Alle Modelle</h1>
        {{ $entities->links() }}
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Bewertung</th>
                    <th>Erfindungsjahr</th>
                    <th>Hersteller</th>
                    <th>Bearbeiten</th>
                </tr>
            </thead>
            <tbody>
                @foreach($entities as $index=>$shipmodel)
                    <tr>
                        <td>{{ $shipmodel->id }}</td>
                        <td>{{ $shipmodel->name }}</td>
                        <td>{{ $shipmodel->rating }}</td>
                        <td>{{ $shipmodel->year_invention }}</td>
                        <td>{{ $shipmodel->manufacturer->name ?? '' }}</td>
                        <td>
                            <a href="{{url('shipmodels/show/'.$shipmodel->id)}}" class="btn btn-success">Show</a>
                            <a href="{{url('shipmodels/edit/'.$shipmodel->id)}}" class="btn btn-success">Edit</a>
                            <a href="{{url('shipmodels/delete/'.$shipmodel->id)}}" class="btn btn-danger">Del</a>
                        </td>
                    </tr>   
                @endforeach
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td>
                        <a href="{{url('shipmodels/add')}}" class="btn btn-success">Add</a>
                    </td>
                </tr>   
            </tfoot>
        </table>
        {{ $entities->links() }}
@endsection 