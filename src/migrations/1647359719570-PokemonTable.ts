import { MigrationInterface, QueryRunner } from 'typeorm';

export class PokemonTable1647359719570 implements MigrationInterface {
  name = 'PokemonTable1647359719570';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`pokemon\` (\`number\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`number\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`pokemon\``);
  }
}
