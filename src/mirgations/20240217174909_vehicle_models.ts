import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('vehicle_models', function (table) {
    table.increments('vehicle_model_id').primary();
    table.string('name').notNullable();
    // Start of Foreign Key
    table
      .integer('vehicle_make_id')
      .unsigned()
      .notNullable()
      .references('vehicle_makes.vehicle_make_id')
      .withKeyName('fk_vehicle_models_to_make_id');
    // End of Foreign Key
    table.string('image_url', 500).nullable();
    table.datetime('created_on', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime('updated_on', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('vehicle_model');
}
