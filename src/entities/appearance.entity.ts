import { Pokemon } from './pokemon.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType({ description: 'appearance' })
export class Appearance {
  @PrimaryGeneratedColumn()
  @Field(type => ID)
  id: number;

  @Column()
  @Field(type => String)
  image: string;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.appearances)
  @Field(type => Pokemon)
  pokemon: Pokemon;

  // TODO : OneToOne reflexive
  @OneToOne(() => Appearance, (appearance) => appearance.id)
  @JoinColumn()
  @Field(type => Appearance)
  shiny?: Appearance;
}
