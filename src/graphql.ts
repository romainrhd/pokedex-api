
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Appearance {
    id?: Nullable<number>;
    image?: Nullable<string>;
    pokemon?: Nullable<Pokemon>;
}

export abstract class IQuery {
    abstract pokemons(): Nullable<Nullable<Pokemon>[]> | Promise<Nullable<Nullable<Pokemon>[]>>;

    abstract pokemon(nationalNumber: string): Nullable<Pokemon> | Promise<Nullable<Pokemon>>;
}

export abstract class IMutation {
    abstract createPokemon(nationalNumber: string, name: string): Nullable<Pokemon> | Promise<Nullable<Pokemon>>;
}

export class Pokemon {
    nationalNumber?: Nullable<string>;
    name?: Nullable<string>;
    appearances?: Nullable<Nullable<Appearance>[]>;
}

type Nullable<T> = T | null;
