import { v4 as uuidv4 } from 'uuid';

export interface IUserData {
    userID: string | undefined;
}

export interface IUser {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

class User implements IUser {
    _id: string;

    constructor(public firstName: string, public lastName: string, public email: string, public password: string) {
        this._id = uuidv4();
    }
}

export default User;
