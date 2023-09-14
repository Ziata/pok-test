export interface PokemonList {
  url: string;
  name: string;
}
export interface PokemonDetails {
  name: string;
  sprites: { front_default: string; [key: string]: string | null };
  stats: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
}

export interface AppState {
  pokemonList: PokemonList[];
  pokemonDetails: { [key: string]: PokemonDetails };
}

export interface IGallereyItem extends PokemonList {
  row: number;
  col: number;
}

export interface Options {
  label: string;
  value?: string;
}
