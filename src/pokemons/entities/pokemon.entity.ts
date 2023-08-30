import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Pokemon {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'Id of Pokémon' })
  id: number;

  @Column()
  @Field(() => String, { description: 'Name of Pokémon' })
  name: string;
}
