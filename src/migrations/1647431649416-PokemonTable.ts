import { MigrationInterface, QueryRunner } from 'typeorm';

export class PokemonTable1647431649416 implements MigrationInterface {
  name = 'PokemonTable1647431649416';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`pokemon\` (\`nationalNumber\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`nationalNumber\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`pokemon\``);
  }
}
