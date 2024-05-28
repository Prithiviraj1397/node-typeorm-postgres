import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('operating_locations', function (table) {
    table.increments('id').primary()
    table.string('iso_code').notNullable().unique()
    table.string('name').notNullable().unique()
    table.string('phone_code').notNullable()
    table.string('flag').notNullable()
    table.string('currency').notNullable()
    table.integer('latitude').notNullable()
    table.integer('longitude').notNullable()
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('operating_locations')
}

