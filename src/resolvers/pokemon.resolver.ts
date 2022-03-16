import { Query, Resolver } from '@nestjs/graphql';
import { PokemonsService } from '../pokemons/pokemons.service';

@Resolver('Pokemon')
export class PokemonResolver {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Query('pokemons')
  getPokemons() {
    return this.pokemonsService.findAll();
  }
}
