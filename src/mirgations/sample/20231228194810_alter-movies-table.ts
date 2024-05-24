import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('movies', function (table) {
    table.dropColumn('release_date');
    table.string('desc');
    table.string('release_date');
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('movies')
}

