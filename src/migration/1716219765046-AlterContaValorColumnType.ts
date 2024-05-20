import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterContaValorColumnType1716219765046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "age" TYPE varchar`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "age" TYPE integer`);
    }

}
