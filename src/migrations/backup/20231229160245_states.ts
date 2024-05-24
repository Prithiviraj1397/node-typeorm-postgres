import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('states', function (table) {
    table
      .foreign('iso_code')
      .references('countries.iso_code')
      .withKeyName('fk_countries_state_iso_code')
    table.increments('id').primary()
    table.string('iso_code').notNullable().unique()
    table.string('name').notNullable().unique()
    table.string('countryCode').notNullable()
    table.integer('latitude').notNullable()
    table.integer('longitude').notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('states')
}

