import faker from 'faker';

faker.seed(321);
faker.locale = "en";

const makeFake = (index)=> {
    return {
        'rank': index+1,
        'firstName': faker.name.firstName(),
        'lastName': faker.name.lastName(),
        'id': 562 + index,
        'profession': faker.name.jobType(),
        'location': faker.address.city(),
        'isActive': faker.random.boolean(),
        'enum': faker.random.arrayElement(["one", "two", "three"]),
    }
}
export const tableData = [...new Array(1000)].map((_,index) => makeFake(index));