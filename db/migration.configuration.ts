import { DatabaseConfiguration } from './database.configuration';
import { DataSource, DataSourceOptions } from 'typeorm';
import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

export default NestFactory.create(ConfigModule.forRoot()).then(() => {
  const dataSourceOptions =
    new DatabaseConfiguration().createTypeOrmOptions() as DataSourceOptions;
  return new DataSource(dataSourceOptions);
});
