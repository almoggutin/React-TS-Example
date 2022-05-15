import * as userService from './user.service';

import { IUser, IUserData } from '../models/user.model';
import { Response } from '../models/response.model';

export const login = async (email: string, password: string): Promise<Response> => {
    const user: IUser | null = await userService.findByEmailAndPassword(email, password);
    if (!user) throw new Error(JSON.stringify({ status: 400, statusText: 'Bad Request' }));

    return { status: 200, statusText: 'Ok', data: { userID: user._id } };
};

export const signup = async (userData: IUser): Promise<Response> => {
    if (await userService.isEmailUnique(userData.email))
        throw new Error(JSON.stringify({ status: 400, statusText: 'Bad Request' }));

    const data: IUserData = await userService.createUser(userData);

    return { status: 201, statusText: 'Created', data };
};

export const logout = async (userID: string): Promise<Response> => {
    const user: IUser | null = await userService.findUser(userID);
    if (!user) throw new Error(JSON.stringify({ status: 400, statusText: 'Bad Request' }));

    return { status: 200, statusText: 'Ok', data: {} };
};
