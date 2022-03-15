import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from 'src/entities/pokemon.entity';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonsRepository: Repository<Pokemon>,
  ) {}

  findAll(): Promise<Pokemon[]> {
    return this.pokemonsRepository.find();
  }
}
