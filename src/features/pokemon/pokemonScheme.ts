export const pokemonTypeDefs = `#graphql
  type PokemonListItem {
    name: String
    url: String
  }

  type FetchPokemonsResponse {
    results: [PokemonListItem]
    next: String
  }

  type Query {
    fetchPokemons(next: String): FetchPokemonsResponse
  }
`