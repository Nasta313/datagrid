import faker from 'faker';

faker.seed(321);
faker.locale = "en";

const makeFake = (index)=> {
    return {
        'rank': index,
        'firstName': faker.name.firstName(),
        'lastName': faker.name.lastName(),
        'id': 562 + index,
        'profession': faker.name.jobType(),
        'city': faker.address.city(),
        'isActive': faker.random.boolean(),
        'phone': faker.phone.phoneNumber(),
    }
}
export const data = [...new Array(100)].map((_,index) => makeFake(index));