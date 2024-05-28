import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('vehicle_category_mapping', function (table) {
    table.increments('vehicle_category_mapping_id').primary();
    table
      .integer('vehicle_category_id')
      .unsigned()
      .notNullable()
      .references('vehicle_categories.vehicle_category_id')
      .withKeyName('fk_category_mapping_to_category_id');
    table
      .integer('vehicle_make_id')
      .unsigned()
      .notNullable()
      .references('vehicle_makes.vehicle_make_id')
      .withKeyName('fk_category_mapping_to_make_id');
    table
      .integer('vehicle_model_id')
      .unsigned()
      .notNullable()
      .references('vehicle_models.vehicle_model_id')
      .withKeyName('fk_category_mapping_to_model_id');
    table
      .integer('vehicle_trim_id')
      .unsigned()
      .notNullable()
      .references('vehicle_trims.vehicle_trim_id')
      .withKeyName('fk_category_mapping_to_trim_id');
    table.datetime('created_on', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime('updated_on', { precision: 6 }).defaultTo(knex.fn.now(6));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('vehicle_categories');
}
