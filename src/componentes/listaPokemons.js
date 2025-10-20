import pokemons from '../assets/pokemon.js';
import { useState, useEffect } from 'react';
import {BrowserRouter , NavLink, Route, Routes,Link} from 'react-router';
const ListaPokemons = () => {

    const [pokemonList,setPokemonList] = useState([]);

      useEffect(() => {
    setPokemonList(pokemons);
       }, []);

    return (
      pokemonList.map((pokemon) => (
        <div key={pokemon.id}>
          <Link to={`/detallesPokemon/${pokemon.id}`}>{pokemon.name}</Link>
          </div>
    ))

    );
}

export default ListaPokemons;