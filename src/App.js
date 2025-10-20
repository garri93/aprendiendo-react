import logo from './logo.svg';
import './App.css';
import {BrowserRouter , NavLink, Route, Routes,Link} from 'react-router';
import ListaPokemons from './componentes/listaPokemons';
import DetallesPokemons from './componentes/detallesPokemons';

import { useState, useEffect } from 'react';


function App() {
  


  return (


    <BrowserRouter>
    <div>
      <>
      <h1> Hola mundo</h1>
      <Routes>
        <Route path='/' element={<ListaPokemons /> }/>
        <Route path='/detallespokemon/:id' element={<DetallesPokemons /> }/>
      </Routes>
      </>
    </div>
    </BrowserRouter>
  );
}

export default App;
