import { pokeAPIEndpoint } from '@/constants/url';
import { type PokemonListItem, type FetchPokemonsResponse, type Pokemon } from '@/features/pokemon/pokemonTypes';
import { fetchPokemonsService, createNewPokemonService } from '@/features/pokemon/pokemonService';

export const pokemonResolver = {
  Query: {
    fetchPokemons: async (_: any, { next }: { next: string }): FetchPokemonsResponse => await fetchPokemonsService(next),
  },
  Mutation: {
    createNewPokemon: async (_: any, { name }: { name: string }): Pokemon => await createNewPokemonService(name),
  },
}