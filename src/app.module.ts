import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Appearance } from './entities/appearance.entity';
import { PokemonsService } from './pokemons/pokemons.service';
import { PokemonResolver } from './resolvers/pokemon.resolver';
import { PokemonsController } from './pokemons/pokemons.controller';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Appearance, Pokemon]),
  ],
  controllers: [PokemonsController],
  providers: [PokemonsService, PokemonResolver],
})
export class AppModule {}
