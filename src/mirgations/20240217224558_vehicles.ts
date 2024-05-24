import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('vehicles', function (table) {
    table
      .uuid('vehicle_id', { useBinaryUuid: true, primaryKey: true })
      .defaultTo(knex.fn.uuid())
      .primary();
    table
      .uuid('vehicle_version_id')
      .references('vehicle_version.vehicle_version_id')
      .withKeyName('fk_vehicle_version_id');
    table
      .uuid('vehicle_type_id')
      .references('vehicle_types.vehicle_type_id')
      .withKeyName('fk_vehicle_vehicle_type_id');
    table.string('registration_no', 15).nullable();
    table.string('vin', 100).nullable();
    table.string('color', 15).nullable();
    table.integer('manufacturing_year', 4).nullable();
    table.datetime('created_on', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime('updated_on', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('vehicles');
}
