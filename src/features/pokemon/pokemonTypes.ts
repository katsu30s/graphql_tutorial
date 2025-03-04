export type PokemonListItem = {
  name: string;
  url: string;
};

export type FetchPokemonsResponse = {
  results: PokemonListItem[];
  next: string;
};

