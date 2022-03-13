import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonsService } from './pokemons/pokemons.service';
import { PokemonsController } from './pokemons/pokemons.controller';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [PokemonsController],
  providers: [PokemonsService],
})
export class AppModule {}
