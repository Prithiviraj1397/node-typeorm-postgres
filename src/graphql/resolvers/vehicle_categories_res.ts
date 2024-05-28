import AppDataSource from '../../orm/config/ormconfig';

import Vehicle_categories from '../../orm/entities/vehicle_categories_entity'

const vehicle_categories_repository = AppDataSource.getRepository(Vehicle_categories);
export default {
    Query: {
        get_all_vehicle_categories: async (_: void, __: void, context: void) => {
            let result = await vehicle_categories_repository.find({})
            return result
        },
    },
}