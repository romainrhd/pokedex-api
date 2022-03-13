import { Injectable } from '@nestjs/common';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable()
export class PokemonsService {
  private readonly pokemons: Pokemon[] = [
    {
      number: '001',
      name: 'Bulblizarre',
    },
    {
      number: '004',
      name: 'Salamèche',
    },
    {
      number: '007',
      name: 'Carapuce',
    },
  ];

  findAll(): Pokemon[] {
    return this.pokemons;
  }
}
