import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryColumn()
  number: number;

  @Column()
  name: string;
}
