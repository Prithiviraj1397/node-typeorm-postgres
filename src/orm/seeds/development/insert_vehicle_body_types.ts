/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('vehicle_body_types').del();
  await knex('vehicle_body_types').insert([
    {
      name: 'Hatchback',
      description:
        "Hatchbacks are India's most frequent vehicle type. It has a tiny body, four doors, and a boot. These vehicles can accommodate up to five people. However, just four persons should be seated at once for maximum comfort. Hatchbacks, as a compact vehicle, provide high fuel efficiency and mileage. As a result, hatchbacks are an excellent alternative for anyone with a small family and a tight fuel budget.",
    },
    {
      name: 'Sedan',
      description:
        'Sedans are meant to seat five people comfortably. They have four doors and a greater boot capacity, allowing them to transport more luggage. These vehicles have little ground clearance and are designed in a three-box form.',
    },
    {
      name: 'MUV',
      description:
        'Multi-utility vehicles (MUVs) or multi-purpose vehicles (MPVs) are designed to be as practical and useful as possible. Because of its ability to carry up to ten passengers, a MUV vehicle is commonly called a people carrier. Because of their greater interior space and seating capacity, MUVs are frequently the vehicle of choice for long-distance travel.',
    },
    {
      name: 'SUV',
      description:
        'SUV is a car body type that includes both passenger vehicles and off-roaders. It is very popular in the Indian market. SUVs are typically huge and measure well over 4 meters, with tiny SUVs being the exception, measuring less than 4 meters. SUVs, with their towering body-line, give the driver a commanding view of the road ahead. Furthermore, SUVs feature high ground clearance, which allows for superior terrain handling and a higher stance from the ground. This trait distinguishes them from all other vehicle body styles.',
    },
    {
      name: 'Convertible',
      description:
        'Convertible automobiles have a roof-line that may be removed or replaced as needed. It is typically found in high-end luxury vehicles. Roof lines are folded step by step using electromechanical mechanisms. Earlier automobiles were made of leather. Metal roof lines on current automobiles are designed to fold part by part and eventually rest on/in the trunk of the vehicle. The operation of a button is sufficient for folding or repositioning the roof linings.',
    },
    {
      name: 'Coupe',
      description:
        'Coupe refers to sedan vehicles having only two doors. The two doors are slightly larger, and while a rear seat is offered in some variants, one can access the interior by moving the front seats. The emphasis here is on styling, elegance, and image. Coupe design is generally used in European countries, and while it is available in India, the number of people who favour this kind is extremely small',
    },
    {
      name: 'Wagon',
      description:
        'Waggon is a vehicle that is an excellent blend of a hatchback and a sedan. These versions benefit from more space behind the second row. It can be used for luggage or to add more seats as needed. In terms of width and height, it is larger than a hatchback',
    },
    {
      name: 'Jeep',
      description:
        'Jeep is a type of vehicle comparable to a MUV. However, it has the option of a hard or soft top.  This sort of vehicle offers a nice blend of usefulness like that of a sports car and cost like that of a MUV, making it ideal for cross-country use and taking out for an adventure drive in the woods.',
    },
    {
      name: 'Van',
      description:
        'Van is the name given to cars with the primary goal of maximizing interior capacity. It features a variable number of seats and, thus, a luggage room.',
    },
  ]);
};
