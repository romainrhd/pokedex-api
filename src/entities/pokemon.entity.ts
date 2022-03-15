import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryColumn()
  number: string;

  @Column()
  name: string;
}
