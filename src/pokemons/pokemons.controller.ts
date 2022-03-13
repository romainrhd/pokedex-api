import { Controller, Get } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { Pokemon } from 'src/interfaces/pokemon.interface';

@Controller('pokemons')
export class PokemonsController {
  constructor(private pokemonsService: PokemonsService) {}

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonsService.findAll();
  }
}
