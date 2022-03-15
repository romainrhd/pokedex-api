import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonsService } from './pokemons/pokemons.service';
import { PokemonsController } from './pokemons/pokemons.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class AppModule {}
