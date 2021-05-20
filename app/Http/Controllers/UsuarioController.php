<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Usuario::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $usuario=new Usuario;
        $usuario->usuario=$request->usuario;
        $usuario->nombre=$request->nombre;
        $usuario->correo=$request->correo;
        $usuario->contraseña=$request->contraseña;
        $usuario->save();
        $usuario = DB::table('usuarios')->where('usuario', $request->usuario)->get();
        return $usuario;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $query = DB::table('usuarios')
            ->select('contraseña')
            ->where('usuario',$request->usuario);
        $usuario=$query->get();
        return $usuario;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function edit(Usuario $usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $usuario = DB::table('usuarios')
              ->where('usuario', $request->usuario)
              ->update(['contraseña' => $request->contraseñaNueva]);
        $usuario = DB::table('usuarios')->where('usuario', $request->usuario)->get();
        return $usuario;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        DB::table('usuarios')->where('usuario', '=', $request->usuario)->delete();
    }
}
