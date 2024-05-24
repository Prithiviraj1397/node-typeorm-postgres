/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('vehicle_trims').del();
  await knex('vehicle_trims').insert([
    {
      name: 'Smart',
      vehicle_model_id: 1,
      vehicle_body_type_id: 4,
      transmission_type: 'Manual',
    },
    {
      name: 'Smart Plus',
      vehicle_model_id: 1,
      vehicle_body_type_id: 4,
      transmission_type: 'Manual',
    },
    {
      name: 'Pure',
      vehicle_model_id: 1,
      vehicle_body_type_id: 4,
      transmission_type: 'Manual',
    },
    {
      name: 'Pure Plus S',
      vehicle_model_id: 1,
      vehicle_body_type_id: 4,
      transmission_type: 'Manual',
    },
    {
      name: 'Pure S',
      vehicle_model_id: 1,
      vehicle_body_type_id: 4,
      transmission_type: 'Manual',
    },
  ]);
};
