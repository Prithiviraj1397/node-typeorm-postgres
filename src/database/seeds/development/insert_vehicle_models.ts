import { Knex } from 'knex';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex: Knex) {
  // Deletes ALL existing entries
  // await knex('vehicle_models').truncate();
  await knex('vehicle_models').insert([{ name: 'Nexon', vehicle_make_id: 97 }]);
};
