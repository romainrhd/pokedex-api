import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class NewPokemonInput {
  @Field()
  @IsString()
  nationalNumber: string;

  @Field()
  @IsString()
  name: string;
}