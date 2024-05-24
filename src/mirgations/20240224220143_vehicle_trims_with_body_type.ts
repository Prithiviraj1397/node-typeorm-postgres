import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('vehicle_trims', function (table) {
    table.increments('vehicle_trim_id').primary();
    table.string('name').notNullable();
    // Start of MODEL_ID Foreign Key
    table
      .integer('vehicle_model_id')
      .unsigned()
      .notNullable()
      .references('vehicle_models.vehicle_model_id')
      .withKeyName('fk_vehicle_trims_to_model_id');
    // End of MODEL_ID Foreign Key
    // Start of BODY_TYPE_ID Foreign Key
    table
      .integer('vehicle_body_type_id')
      .unsigned()
      .notNullable()
      .references('vehicle_body_types.vehicle_body_type_id')
      .withKeyName('fk_vehicle_trims_to_vehicle_body_type_id');
    // End of BODY_TYPE_ID Foreign Key
    table.string('image_url', 500).nullable();
    table.string('transmission_type', 30).nullable();
    table.integer('year', 4).nullable();
    table.datetime('created_on', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime('updated_on', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('vehicle_trims');
}
