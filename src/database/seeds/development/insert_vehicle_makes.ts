import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex: Knex) {
  // Deletes ALL existing entries
  await knex('vehicle_makes').del();
  await knex('vehicle_makes').insert([
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/abarth1.png',
      name: 'Abarth',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/ac-cars.png',
      name: 'AC',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/acura.png',
      name: 'Acura',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/aixam.png',
      name: 'Aixam',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/alfa_romeo.png',
      name: 'Alfa Romeo',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/ariel.png',
      name: 'Ariel',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/10/arrinera-logo.png',
      name: 'Arrinera',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/aston_martin.png',
      name: 'Aston Martin',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/audi.png',
      name: 'Audi',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/bentley.png',
      name: 'Bentley',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png',
      name: 'BMW',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/bugatti.png',
      name: 'Bugatti',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/buick.png',
      name: 'Buick',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/cadillac.png',
      name: 'Cadillac',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/caterham.png',
      name: 'Caterham',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/chevrolet.png',
      name: 'Chevrolet',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/chrysler.png',
      name: 'Chrysler',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/citroen.png',
      name: 'Citroën',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/corvette.png',
      name: 'Corvette',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/dacia.png',
      name: 'Dacia',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/daf.png',
      name: 'Daf',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/daihat.png',
      name: 'Daihatsu',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/dodge.png',
      name: 'Dodge',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/10/drmotor.png',
      name: 'DR Motor',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/elfin.png',
      name: 'Elfin',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/ferrari.png',
      name: 'Ferrari',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/fiat.png',
      name: 'Fiat',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/ford.png',
      name: 'Ford',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/gaz.png',
      name: 'Gaz',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/geely.png',
      name: 'Geely',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/gillet.png',
      name: 'Gillet',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/ginetta.png',
      name: 'Ginetta',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/gm.png',
      name: 'General Motors',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/gmc.png',
      name: 'GMC',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2013/10/Great-Wall.png',
      name: 'Great Wall',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/gumpert.png',
      name: 'Gumpert',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/10/hennessey.png',
      name: 'Hennessey logo',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/10/holden.png',
      name: 'Holden',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/honda.png',
      name: 'Honda',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/hummer.png',
      name: 'Hummer',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/hyundai.png',
      name: 'Hyundai',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/inf.png',
      name: 'Infiniti',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/isuzu.png',
      name: 'Isuzu',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/jagu.png',
      name: 'Jaguar',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/jeep.png',
      name: 'Jeep',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/joss.png',
      name: 'Joss',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/kia.png',
      name: 'Kia',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/koenigsegg.png',
      name: 'Koenigsegg',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/lada.png',
      name: 'Lada',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/lamb.png',
      name: 'Lamborghini',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/lancia.png',
      name: 'Lancia',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/land-rover.png',
      name: 'Land Rover',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/lexus.png',
      name: 'Lexus',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/linc.png',
      name: 'Lincoln',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/lotus.png',
      name: 'Lotus',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/11/luxgen-logo.png',
      name: 'Luxgen',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/11/mahindra.png',
      name: 'Mahindra',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/12/Maruti_Suzuki.png',
      name: 'Maruti Suzuki',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/mase.png',
      name: 'Maserati',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/maybach.png',
      name: 'Maybach',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/mazda.png',
      name: 'Mazda',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/mclaren.png',
      name: 'Mclaren',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/marchedrs.png',
      name: 'Mercedes',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/mg.png',
      name: 'MG',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/mini.png',
      name: 'Mini',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/mitub.png',
      name: 'Mitsubishi',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/morgan.png',
      name: 'Morgan Motor',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/mustang.png',
      name: 'Mustang logo',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/nissan.png',
      name: 'Nissan',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/noble.png',
      name: 'Noble',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/opel.png',
      name: 'Opel',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/pagani.png',
      name: 'Pagani',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/panoz.png',
      name: 'Panoz',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/perodua.png',
      name: 'Perodua',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/peug.png',
      name: 'Peugeot',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/piaggio.png',
      name: 'Piaggio',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/pininfarina.png',
      name: 'Pininfarina',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/porsche.png',
      name: 'Porsche',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/proton.png',
      name: 'Proton',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/renault.png',
      name: 'Renault',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/reva.png',
      name: 'Reva',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2012/01/rimac-150x150.png',
      name: 'Rimac',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/rolls-royce.png',
      name: 'Rolls Royce',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/ruf.png',
      name: 'Ruf logo',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/saab.png',
      name: 'Saab',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/scania.png',
      name: 'Scania',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/scion.png',
      name: 'Scion',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/seat.png',
      name: 'Seat',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/10/shelby.png',
      name: 'Shelby',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/skoda.png',
      name: 'Skoda',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/smart.png',
      name: 'Smart',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/spyker.png',
      name: 'Spyker',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/ssangyong.png',
      name: 'Ssangyong',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/10/ssc.png',
      name: 'SSC',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/subaru.png',
      name: 'Subaru',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/suzuki.png',
      name: 'Suzuki',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/tata.png',
      name: 'Tata',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/tatra.png',
      name: 'Tatra',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/tesla.png',
      name: 'Tesla',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/toyota.png',
      name: 'Toyota',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/1176359_187686584745478_1792749640_n.jpg',
      name: 'Tramontana',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/troller.png',
      name: 'Troller',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/tvr.png',
      name: 'TVR',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/uaz.png',
      name: 'UAZ',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/vandenbrink_design.png',
      name: 'Vandenbrink',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/vauxhall.png',
      name: 'Vauxhall',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/vector_motors.png',
      name: 'Vector Motors',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/venturi.png',
      name: 'Venturi',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/volkswagen.png',
      name: 'Volkswagen',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/volvo.png',
      name: 'Volvo',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/wiesmann.png',
      name: 'Wiesmann',
    },
    {
      image_url:
        'https://www.car-logos.org/wp-content/uploads/2011/09/zagato.png',
      name: 'Zagato',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/zaz.png',
      name: 'Zaz',
    },
    {
      image_url: 'https://www.car-logos.org/wp-content/uploads/2011/09/zil.png',
      name: 'Zil',
    },
  ]);
};
