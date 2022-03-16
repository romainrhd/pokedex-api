import { Pokemon } from '../entities/pokemon.entity';

export interface Appearance {
  id: number;
  image: string;
  pokemon: Pokemon;
  // TODO : Add shiny_id for shiny system
}
