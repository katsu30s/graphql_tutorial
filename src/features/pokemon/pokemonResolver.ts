import { pokeAPIEndpoint } from '@/constants/url';
import { type PokemonListItem } from '@/features/pokemon/pokemonTypes';
import { fetchPokemonsService } from '@/features/pokemon/pokemonService';

export const pokemonResolver = {
  Query: {
    fetchPokemons: async (_: any): {
      results: PokemonListItem[];
    } => await fetchPokemonsService(),
  },
}