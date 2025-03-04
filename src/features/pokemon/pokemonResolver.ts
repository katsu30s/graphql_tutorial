import { pokeAPIEndpoint } from '@/constants/url';
import { type PokemonListItem, type FetchPokemonsResponse } from '@/features/pokemon/pokemonTypes';
import { fetchPokemonsService } from '@/features/pokemon/pokemonService';

export const pokemonResolver = {
  Query: {
    fetchPokemons: async (_: any, { next }: { next: string }): FetchPokemonsResponse => await fetchPokemonsService(next),
  },
}