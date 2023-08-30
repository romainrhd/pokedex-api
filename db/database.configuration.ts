import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Pokemon } from '../src/pokemons/entities/pokemon.entity';
export class DatabaseConfiguration implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Pokemon],
      migrations: ['dist/db/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_history',
      migrationsRun: true,
      logging: true,
      synchronize: true,
    };
  }
}
