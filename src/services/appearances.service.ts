import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Appearance } from 'src/entities/appearance.entity';

@Injectable()
export class AppearancesService {
  constructor(
    @InjectRepository(Appearance)
    private appearancesRepository: Repository<Appearance>,
  ) {}

  findAll(): Promise<Appearance[]> {
    return this.appearancesRepository.find({ relations: ['pokemon'] });
  }
}
