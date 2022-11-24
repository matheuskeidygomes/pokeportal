import React, { useState, useEffect } from 'react';
import "./index.css";
import { pokemonService } from '../../services/requests/req.js';
import { baseURL } from '../../services/connection/api.js';
import { useParams } from 'react-router-dom';

export default function Pokemon() {

  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line
  }, []);

  async function getPokemon() {
    // fetch(`${baseURL}/pokedex/${id}`).then(res => res.json()).then(res => setPokemon(res)).catch(err => console.log(err));

    // const res = await fetch(`${baseURL}/pokedex/${id}`);
    // const poke = await res.json();

    const poke = await pokemonService.getOne(id);
    setPokemon(poke);
  }

  return <>

    {pokemon.name && <>
      <div className="pokemon">
        <img src={`${baseURL}/${pokemon.image}`} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        <p>{pokemon.type[0]}</p>
      </div>
    </>}

  </>
}