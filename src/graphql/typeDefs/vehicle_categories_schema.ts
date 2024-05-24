export default `
scalar Date

type vehicle_categories{
    vehicle_category_id:ID
    name:String
    description:String
    created_on:Date
    updated_on:Date
}
type Query{
    get_all_vehicle_categories:[vehicle_categories]
}

`