import { Pokemon } from './pokemon.model';

// Usamos 'Omit' para criar um tipo que tem tudo de 'Pokemon', exceto 'imageUrl',
// pois teremos um objeto de sprites mais completo.
export interface PokemonDetail extends Omit<Pokemon, 'imageUrl'> {
  sprites: Sprites;
  height: number;
  weight: number;
  abilities: Ability[];
  stats: Stat[];
  types: Type[];
}

export interface Sprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}

export interface Ability {
  name: string;
  is_hidden: boolean;
}

export interface Type {
  name: string;
}

export interface Stat {
  name: string;
  base_stat: number;
}
