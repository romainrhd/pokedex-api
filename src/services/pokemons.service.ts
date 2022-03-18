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
    return this.pokemonsRepository.find({ relations: ['appearances'] });
  }

  findOneByNationalNumber(nationalNumber: string): Promise<Pokemon> {
    return this.pokemonsRepository.findOne(nationalNumber, {
      relations: ['appearances'],
    });
  }
}
