import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonsService } from './pokemons.service';
import { PokemonsResolver } from './pokemons.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  providers: [PokemonsResolver, PokemonsService],
})
export class PokemonsModule {}
