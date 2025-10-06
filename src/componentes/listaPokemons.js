import React from "react";
//import pokemondata from '../assets/pokemon.json';
import { useState, useEffect } from 'react';

const ListaPokemons = () => {
    const [pokemon,setPokemon] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
        const response = await fetch('../assets/pokemon.json');
        const jsonData = await response.json();
        setPokemon(jsonData); // Almacenamos los datos en el estado
    };
    fetchData();
    });


    return (
        <>
         <ul>
      {pokemon.map((pokemon) => (
        <li key={pokemon.id}>
          {pokemon.name}
        </li>
      ))}
    </ul>
        </>

    );
}

export default ListaPokemons;