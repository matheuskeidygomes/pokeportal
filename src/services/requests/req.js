import { baseURL } from "../connection/api.js";

export const pokemonService = {
    getOne: async (id) => {
        const res = await fetch(`${baseURL}/pokedex/${id}`);
        const poke = await res.json();
        return poke;
    },
    getAll: async () => {
        const res = await fetch(`${baseURL}/pokedex`);
        const pokes = await res.json();
        return pokes;
    },
    getByType: async (type) => {
        const res = await fetch(`${baseURL}/pokedex/type/${type}`);
        const pokes = await res.json();
        return pokes;
    }
}

