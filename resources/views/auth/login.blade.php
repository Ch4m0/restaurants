@extends('layouts.app')

@section('content')

<div class="container" style="margin-top: 40px;">
    <div class="row">

        <div class="col-md-4 col-md-offset-4">
       <h1 class="form-signin-heading text-muted" align="center"><a href="localhost:8000"><img class="rebotar zoomIt" width="200" src="http://www.miskiperu.com/images/iconos/delivery.png" alt="Company Logo"></a></h1>        
            <div class="panel panel-default">
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
    
                            <div class="col-md-12 ">
                                <input id="email" type="email" class="form-control" name="email" placeholder="Nombre de usuario" value="{{ old('email') }}">

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">

                            <div class="col-md-12">
                                <input id="password" type="password" class="form-control" placeholder="Contraseña" name="password">

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 ">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember">Recordarme
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-12 ">
                                <button type="submit" class="btn btn-primary btn-block">
                                    Entrar 
                                </button>

                            </div>
                        </div>
                                <a class="btn btn-link" href="{{ url('/password/reset') }}">Olvidaste tu contraseña?</a>
                    </form>
                </div>
        </div>
    </div>
</div>


@endsection
