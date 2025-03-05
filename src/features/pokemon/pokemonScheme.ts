export const pokemonTypeDefs = `#graphql
  type PokemonListItem {
    name: String
    url: String
  }

  type Pokemon {
    id: Int
    name: String
    baseExperience: Int
    height: Int
    isDefault: Boolean
    order: Int
    weight: Int
  }

  type FetchPokemonsResponse {
    results: [PokemonListItem]
    next: String
  }

  type Query {
    fetchPokemons(next: String): FetchPokemonsResponse
  }

  type Mutation {
    createNewPokemon(name: String): Pokemon
  }
`