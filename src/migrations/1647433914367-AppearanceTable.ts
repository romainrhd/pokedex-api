import { MigrationInterface, QueryRunner } from 'typeorm';

export class AppearanceTable1647433914367 implements MigrationInterface {
  name = 'AppearanceTable1647433914367';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`appearance\` (\`id\` int NOT NULL AUTO_INCREMENT, \`image\` varchar(255) NOT NULL, \`pokemonNationalNumber\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`appearance\` ADD CONSTRAINT \`FK_852562291a82d88546b636ef348\` FOREIGN KEY (\`pokemonNationalNumber\`) REFERENCES \`pokemon\`(\`nationalNumber\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`appearance\` DROP FOREIGN KEY \`FK_852562291a82d88546b636ef348\``,
    );
    await queryRunner.query(`DROP TABLE \`appearance\``);
  }
}
