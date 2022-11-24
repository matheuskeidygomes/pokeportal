import React, { useState, useEffect } from 'react';
import "./index.css";
import { pokemonService } from "../../services/requests/req.js";
import { baseURL } from "../../services/connection/api.js";

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokedex();
  }, []);

  async function getPokedex() {
    const list = await pokemonService.getAll();
    setPokemons(list);
  }

  return <>

    {pokemons.map((pokemon, index) => {
      return (
        <div key={index} className="pokemon">
          <img src={`${baseURL}/${pokemon.image}`} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <p>{pokemon.type[0]}</p>
        </div>
      )
    })}

  </>
}