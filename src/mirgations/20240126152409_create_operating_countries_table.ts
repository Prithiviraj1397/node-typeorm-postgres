import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('operating_countries', function (table) {
    table.increments('location_id').primary();
    table.string('iso_code').notNullable().unique();
    table.string('location_name').notNullable().unique();
    table.string('phone_code').notNullable();
    table.string('flag').notNullable();
    table.string('currency').notNullable();
    table.integer('latitude').notNullable();
    table.integer('longitude').notNullable();
    table.string('zoneName').notNullable();
    table.integer('gmt_offset').notNullable();
    table.string('gmt_offset_name').notNullable();
    table.string('abbreviation').notNullable();
    table.string('time_zone_name').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('operating_countries');
}
