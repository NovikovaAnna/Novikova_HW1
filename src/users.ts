import { UserInfo, usersInfoArray } from './userInfo';

export interface User {
    userid: string;
    name: string;
    gender: string;
}

export function getUsersJobPositions(users: User[]): any[] {
    return users.map(user => {
        const userInfo = usersInfoArray.find((info: UserInfo) => info.userid === user.userid);
        return {
            name: user.name,
            position: userInfo?.organization.position || '',
            age: userInfo?.age || 0,
            gender: user.gender,
        };
    });
}