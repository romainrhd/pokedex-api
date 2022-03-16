import { Appearance } from 'src/entities/appearance.entity';

export interface Pokemon {
  nationalNumber: string;
  name: string;
  appearances: Appearance[];
}
