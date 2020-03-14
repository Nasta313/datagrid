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
        'city': faker.address.city(),
        'isActive': faker.random.boolean(),
        'mail': faker.internet.email(),
    }
}
export const data = [...new Array(1000)].map((_,index) => makeFake(index));