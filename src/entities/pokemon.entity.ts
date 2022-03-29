import { Appearance } from './appearance.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType({ description: 'pokemon' })
export class Pokemon {
  @PrimaryColumn()
  @Field(type => ID)
  nationalNumber: string;

  @Column()
  @Field(type => String)
  name: string;

  @OneToMany(() => Appearance, (appearance) => appearance.pokemon)
  @Field(type => [Appearance])
  appearances: Appearance[];
}
