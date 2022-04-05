import {MigrationInterface, QueryRunner} from "typeorm";

export class Shiny1648644081976 implements MigrationInterface {
    name = 'Shiny1648644081976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`appearance\` ADD \`shinyId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`appearance\` ADD UNIQUE INDEX \`IDX_dc6d5e411904a355654ea6012b\` (\`shinyId\`)`);
        await queryRunner.query(`ALTER TABLE \`appearance\` DROP FOREIGN KEY \`FK_852562291a82d88546b636ef348\``);
        await queryRunner.query(`ALTER TABLE \`appearance\` CHANGE \`pokemonNationalNumber\` \`pokemonNationalNumber\` varchar(255) NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_dc6d5e411904a355654ea6012b\` ON \`appearance\` (\`shinyId\`)`);
        await queryRunner.query(`ALTER TABLE \`appearance\` ADD CONSTRAINT \`FK_852562291a82d88546b636ef348\` FOREIGN KEY (\`pokemonNationalNumber\`) REFERENCES \`pokemon\`(\`nationalNumber\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`appearance\` ADD CONSTRAINT \`FK_dc6d5e411904a355654ea6012ba\` FOREIGN KEY (\`shinyId\`) REFERENCES \`appearance\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`appearance\` DROP FOREIGN KEY \`FK_dc6d5e411904a355654ea6012ba\``);
        await queryRunner.query(`ALTER TABLE \`appearance\` DROP FOREIGN KEY \`FK_852562291a82d88546b636ef348\``);
        await queryRunner.query(`DROP INDEX \`REL_dc6d5e411904a355654ea6012b\` ON \`appearance\``);
        await queryRunner.query(`ALTER TABLE \`appearance\` CHANGE \`pokemonNationalNumber\` \`pokemonNationalNumber\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`appearance\` ADD CONSTRAINT \`FK_852562291a82d88546b636ef348\` FOREIGN KEY (\`pokemonNationalNumber\`) REFERENCES \`pokemon\`(\`nationalNumber\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`appearance\` DROP INDEX \`IDX_dc6d5e411904a355654ea6012b\``);
        await queryRunner.query(`ALTER TABLE \`appearance\` DROP COLUMN \`shinyId\``);
    }

}
