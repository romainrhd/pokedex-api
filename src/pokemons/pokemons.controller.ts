import { Controller, Get } from '@nestjs/common';
import { Pokemon } from 'src/interfaces/pokemon.interface';
import { PokemonsService } from './pokemons.service';

@Controller('pokemons')
export class PokemonsController {
  constructor(private pokemonsService: PokemonsService) {}

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonsService.findAll();
  }
}
