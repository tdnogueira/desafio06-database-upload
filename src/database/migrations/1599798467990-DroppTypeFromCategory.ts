import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class DroppTypeFromCategory1599798467990
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('categories', 'type');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'type',
        type: 'varchar',
      }),
    );
  }
}
