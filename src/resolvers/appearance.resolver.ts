import { Query, Resolver } from '@nestjs/graphql';
import { AppearancesService } from '../services/appearances.service';

@Resolver('Appearance')
export class AppearanceResolver {
  constructor(private readonly appearancesService: AppearancesService) {}

  @Query('appearances')
  getPokemons() {
    return this.appearancesService.findAll();
  }
}
