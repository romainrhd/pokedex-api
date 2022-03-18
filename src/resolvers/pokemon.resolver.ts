import { Args, Query, Resolver } from '@nestjs/graphql';
import { Pokemon } from 'src/graphql';
import { PokemonsService } from '../services/pokemons.service';

@Resolver('Pokemon')
export class PokemonResolver {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Query('pokemons')
  getPokemons() {
    return this.pokemonsService.findAll();
  }

  @Query('pokemon')
  getPokemon(
    @Args('nationalNumber')
    nationalNumber: string,
  ): Promise<Pokemon> {
    return this.pokemonsService.findOneByNationalNumber(nationalNumber);
  }
}
