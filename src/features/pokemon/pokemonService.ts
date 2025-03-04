import { pokeAPIEndpoint } from '@/constants/url';
import { type PokemonListItem } from '@/features/pokemon/pokemonTypes';

export const fetchPokemonsService = async () => {
  const url = `${pokeAPIEndpoint}/pokemon?limit=20`

  const response = await fetch(url);
  const data = await response.json();

  const pokemonList: PokemonListItem = data.results.map((pokemon: any) => ({
    name: pokemon.name,
    url: pokemon.url,
  }));

  return {
    results: pokemonList,
  };
}