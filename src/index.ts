import { getUsersJobPositions, User } from './users';
import { UserInfo, usersInfoArray } from './userInfo';

let usersArray: User[] = [
    {
        userid: '127e4567-e89b-12d3-a458-426614174000',
        name: 'John',
        gender: 'man',
    },
    {
        userid: '127e4567-e89a-12f3-a458-327395154000',
        name: 'Anna',
        gender: 'woman',
    },
];

const usersPositions = getUsersJobPositions(usersArray);

console.log('userPositions', usersPositions)