import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('operating_countries', function (table) {
    table.renameColumn('zoneName', 'zone_name');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('operating_countries');
}
