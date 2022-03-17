
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IQuery {
    abstract appearances(): Nullable<Nullable<Appearance>[]> | Promise<Nullable<Nullable<Appearance>[]>>;

    abstract pokemons(): Nullable<Nullable<Pokemon>[]> | Promise<Nullable<Nullable<Pokemon>[]>>;
}

export class Appearance {
    id?: Nullable<number>;
    name?: Nullable<string>;
    pokemon?: Nullable<Pokemon>;
}

export class Pokemon {
    nationalNumber?: Nullable<string>;
    name?: Nullable<string>;
    appearances?: Nullable<Nullable<Appearance>[]>;
}

type Nullable<T> = T | null;
