export const pokemonTypeDefs = `#graphql
  type PokemonListItem {
    name: String
    url: String
  }

  type FetchPokemonsResponse {
    results: [PokemonListItem]
  }

  type Query {
    fetchPokemons: FetchPokemonsResponse
  }
`