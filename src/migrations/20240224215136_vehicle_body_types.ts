import type { Knex } from 'knex';

//     table.increments('vehicle_type_id').primary();
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('vehicle_body_types', function (table) {
    table.increments('vehicle_body_type_id').primary();
    table.string('name').notNullable();
    table.string('description', 3000).notNullable();
    table.datetime('created_on', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime('updated_on', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('vehicle_body_types');
}
