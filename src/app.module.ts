import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Appearance } from './entities/appearance.entity';
import { PokemonsService } from './services/pokemons.service';
import { PokemonResolver } from './resolvers/pokemon.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Appearance, Pokemon]),
  ],
  providers: [PokemonsService, PokemonResolver],
})
export class AppModule {}
