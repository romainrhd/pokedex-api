import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Appearance } from './entities/appearance.entity';
import { PokemonsService } from './pokemons/pokemons.service';
import { PokemonsController } from './pokemons/pokemons.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Appearance, Pokemon]),
  ],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class AppModule {}
