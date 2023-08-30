import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePokemonTable1693429678558 implements MigrationInterface {
  name = 'CreatePokemonTable1693429678558';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`pokemon\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`pokemon\``);
  }
}
