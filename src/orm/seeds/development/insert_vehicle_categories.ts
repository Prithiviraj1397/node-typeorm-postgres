/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('vehicle_categories').del();
  await knex('vehicle_categories').insert([
    {
      name: 'Micro',
      description:
        'Micro cars are best suited for short rides for individuals or small groups. This category features compact hatchbacks that sit up to 4 adults with air conditioning and offer great value for money.',
    },
    {
      name: 'Mini',
      description:
        'Mini offers more space with regular hatchbacks. However, features such as air conditioning and fares remain almost equal to Micro.',
    },
    {
      name: 'Grand Sedan',
      description:
        'Grand Sedan offers a wide range of Sedan cars with free Wi-Fi and top drivers. In addition, passengers get the best-maintained sedans with extra legroom and boot space to accommodate luggage.',
    },
    {
      name: 'Grand Executive',
      description:
        'Grand Executive range cars ensures business rides with the best-in-class sedan models offered.  These vehicles offer upmarket interiors with professionally trained drivers, spacious cabins, leather upholstery, etc.,',
    },
    {
      name: 'SUV',
      description:
        'Need a 6 or 7-seater cab?  SUV comes with more seats and comfort. In addition, you get extra legroom, big boot space & Wi-Fi, making a perfect cab for large family rides.',
    },
    {
      name: 'LUX',
      description:
        'LUX offers best-in-class luxury cars for special occasions. You get ultra-comfortable leather seats with maximum comfort.',
    },
  ]);
};
