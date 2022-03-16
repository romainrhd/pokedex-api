import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Appearance } from './appearance.entity';

@Entity()
export class Pokemon {
  @PrimaryColumn()
  nationalNumber: string;

  @Column()
  name: string;

  @OneToMany(() => Appearance, (appearance) => appearance.pokemon)
  appearances: Appearance[];
}
