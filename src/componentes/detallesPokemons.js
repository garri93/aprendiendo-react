import pokemons from '../assets/pokemon.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const DetallesPokemons = () => {
 
  const {id} = useParams();
  const pokemon = pokemons.find((p) => p.id === Number(id));
  
    return (
        <div>
      <h2>{pokemon.name}</h2>
      <p>ID:{pokemon.id}</p>
      <p>Tipo:{pokemon.type.join(', ')}</p>
      <p>Nivel: {pokemon.level}</p>
    </div>
    );
}

export default DetallesPokemons;