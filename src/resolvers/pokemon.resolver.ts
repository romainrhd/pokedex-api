import { Pokemon } from '../entities/pokemon.entity';
import { PokemonsService } from '../services/pokemons.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver((of) => Pokemon)
export class PokemonResolver {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Query(returns => [Pokemon])
  pokemons() {
    return this.pokemonsService.findAll();
  }

  @Query(returns => Pokemon)
  pokemon(
    @Args('nationalNumber')
    nationalNumber: string,
  ): Promise<Pokemon> {
    return this.pokemonsService.findOneByNationalNumber(nationalNumber);
  }

  @Mutation(returns => Pokemon)
  createPokemon(
    @Args('nationalNumber') nationalNumber: string,
    @Args('name') name: string,
  ): Promise<Pokemon> {
    return this.pokemonsService.create(nationalNumber, name);
  }
}
