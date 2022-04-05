import { Pokemon } from '../entities/pokemon.entity';
import { NewPokemonInput } from '../dto/new-pokemon.input';
import { PokemonsService } from '../services/pokemons.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(of => Pokemon)
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
    @Args('newPokemonData') newPokemonData: NewPokemonInput,
  ): Promise<Pokemon> {
    return this.pokemonsService.create(newPokemonData);
  }
}
