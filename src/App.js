import logo from './logo.svg';
import './App.css';
import {BrowserRouter , NavLink, Route, Routes} from 'react-router';
import ListaPokemons from './componentes/listaPokemons';
import { useState } from 'react';


function App() {
  return (
    <BrowserRouter>
    <div>
      <>
      <h1> Hola mundo</h1>
      <Routes>
        <Route path='/' element={
          <div>
            <h2>dsdsd</h2>
            <ListaPokemons />

          </div>

        }/>
      </Routes>
      </>
    </div>
    </BrowserRouter>
  );
}

export default App;
