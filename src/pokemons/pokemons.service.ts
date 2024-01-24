import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { CreatePokemonInput } from './dto/create-pokemon.input';
import { UpdatePokemonInput } from './dto/update-pokemon.input';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  create(createPokemonInput: CreatePokemonInput): Promise<Pokemon> {
    const pokemon: Pokemon = new Pokemon();
    pokemon.name = createPokemonInput.name;
    return this.pokemonRepository.save(pokemon);
  }

  findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  findOne(id: number): Promise<Pokemon> | null {
    return this.pokemonRepository.findOneByOrFail({ id });
  }

  async update(
    id: number,
    updatePokemonInput: UpdatePokemonInput,
  ): Promise<Pokemon> {
    const pokemon: Pokemon = await this.pokemonRepository.findOneByOrFail({
      id,
    });
    pokemon.name = updatePokemonInput.name;
    return this.pokemonRepository.save(pokemon);
  }

  async remove(id: number): Promise<boolean> {
    await this.pokemonRepository.delete(id);
  }
}
