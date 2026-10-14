import type { PhotoCredit } from '@/types';

// Attribution for the Wikimedia Commons placeholder photos. CC BY / CC BY-SA
// require it to stay on the site while those photos are used. Remove entries
// as the client's own photos replace them.
export const photoCredits: PhotoCredit[] = [
  { file: 'factory-bottling-line', author: 'Sunday Orbih', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Veritas_University.The_water_factory_(1).jpg' },
  { file: 'sachet-packing-machines', author: 'Sunday Orbih', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Veritas_University.The_water_factory_(2).jpg' },
  { file: 'stacked-sachet-bags', author: 'Sunday Orbih', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Veritas_University.The_water_factory_(4).jpg' },
  { file: 'sachet-sealing-machine', author: 'Zarerh', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Sachet_water_machine_in_north_Nigeria_1.jpg' },
  { file: 'sachet-machine-closeup', author: 'Zarerh', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Sachet_water_machine_in_north_Nigeria.jpg' },
  { file: 'water-factory-building', author: 'OtuNwachinemere', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Dorben.Polytechnic_Water_Factory_15.jpg' },
  { file: 'sachet-in-hand', author: 'Junaid SADIQ', license: 'CC BY 4.0', source: 'https://commons.wikimedia.org/wiki/File:Water_inside_a_sachet_leather.jpg' },
  { file: 'bags-of-pure-water', author: 'Marwan Bello', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Bags_of_pure_water.jpg' },
  { file: 'filtration-tanks', author: 'Ourlibrary', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:AUGUSTINE_UNIVERSITY_ILARA_EPE,_WATER_FACTORY_EQUIPMENT.jpg' },
  { file: 'lab-testing', author: 'US EPA', license: 'Public domain', source: 'https://commons.wikimedia.org/wiki/File:Jar_testing_equipment_for_testing_water_quality._(15052115711).jpg' },
];
