import * as storageUtils from '../utils/storage.utils';

import User, { IUser, IUserData } from '../models/user.model';

export const isEmailUnique = async (email: string): Promise<boolean> => {
    const usersCollection = storageUtils.getUsersCollectionFromSessionStorage();

    const user = usersCollection.find((userDoc: IUser) => userDoc.email === email);
    if (user) return true;

    return false;
};

export const createUser = async ({ firstName, lastName, email, password }: IUser): Promise<IUserData> => {
    const user: IUser = new User(firstName, lastName, email, password);

    storageUtils.addUserToUsersCollectionOnSessionStorage(user);

    return { userID: user._id };
};

export const findUser = async (userID: string): Promise<IUser | null> => {
    const usersCollection: IUser[] = storageUtils.getUsersCollectionFromSessionStorage();

    const user = usersCollection.find((userDoc: IUser) => userDoc._id === userID);
    if (!user) return null;

    return user;
};

export const findByEmailAndPassword = async (email: string, password: string): Promise<IUser | null> => {
    const usersCollection: IUser[] = storageUtils.getUsersCollectionFromSessionStorage();

    const user: IUser | undefined = usersCollection.find(
        (userDoc: IUser) => userDoc.email === email && userDoc.password === password
    );
    if (!user) return null;

    return user;
};
