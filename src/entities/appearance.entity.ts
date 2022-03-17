import { Pokemon } from './pokemon.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Appearance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.appearances)
  pokemon: Pokemon;
}
