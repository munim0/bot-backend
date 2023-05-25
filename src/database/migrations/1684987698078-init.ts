import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1684987698078 implements MigrationInterface {
    name = 'Init1684987698078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notifications" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "event_info" jsonb NOT NULL DEFAULT '{}', "finish_date" TIMESTAMP NOT NULL, "receiver" character varying NOT NULL, CONSTRAINT "PK_6a72c3c0f683f6462415e653c3a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "notifications"`);
    }

}
