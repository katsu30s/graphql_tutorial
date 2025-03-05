import { pokeAPIEndpoint } from '@/constants/url';
import { type PokemonListItem, type FetchPokemonsResponse, type Pokemon } from '@/features/pokemon/pokemonTypes';

export const fetchPokemonsService = async (
  next?: string
): FetchPokemonsResponse => {
  const url = next ? next : `${pokeAPIEndpoint}/pokemon?limit=20`;

  const response = await fetch(url);
  const data = await response.json();

  const pokemonList: PokemonListItem = data.results.map((pokemon: any) => ({
    name: pokemon.name,
    url: pokemon.url,
  }));

  return {
    results: pokemonList,
    next: data.next,
  };
};

export const createNewPokemonService = async (
  name: string
): Pokemon => {
  return {
    name,
    id: 9999,
    baseExperience: 999,
    height: 999,
    isDefault: true,
    order: 999,
    weight: 999,
  };
};
