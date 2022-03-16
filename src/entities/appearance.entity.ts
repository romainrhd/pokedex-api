import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Entity()
export class Appearance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.appearances)
  pokemon: Pokemon;
}
