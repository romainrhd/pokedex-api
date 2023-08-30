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

  create(createPokemonInput: CreatePokemonInput) {
    return 'This action adds a new pokemon';
  }

  findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  findOne(id: number): Promise<Pokemon> | null {
    return this.pokemonRepository.findOneBy({ id });
  }

  update(id: number, updatePokemonInput: UpdatePokemonInput) {
    return `This action updates a #${id} pokemon`;
  }

  async remove(id: number): Promise<void> {
    await this.pokemonRepository.delete(id);
  }
}
