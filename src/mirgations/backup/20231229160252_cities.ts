import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cities', function (table) {
    table
      .foreign('countryCode')
      .references('countries.iso_code')
      .withKeyName('fk_countries_city_country_code')
    table.increments('id').primary()
    table.string('name').notNullable().unique()
    table.string('state_code').notNullable()
    table.string('countryCode').notNullable()
    table.integer('latitude').notNullable()
    table.integer('longitude').notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('states')
}

