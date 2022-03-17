import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Appearance } from './entities/appearance.entity';
import { PokemonsService } from './services/pokemons.service';
import { PokemonResolver } from './resolvers/pokemon.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppearancesService } from './services/appearances.service';
import { AppearanceResolver } from './resolvers/appearance.resolver';

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
  providers: [
    AppearancesService,
    PokemonsService,
    PokemonResolver,
    AppearanceResolver,
  ],
})
export class AppModule {}
