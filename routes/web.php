<?php

Route::get('usuarios', ['uses'=>'UsersController@index'])->name('users.index');

Route::get('/', function () {
    return view('users.index');
});
