import * as constants from '../constants/constants';
import { IUserData, IUser } from '../models/user.model';
import { ITask } from '../models/task.model';

export const setUserDataOnSessionStorage = (userData: IUserData): void => {
    sessionStorage.setItem(constants.USER_DATA, JSON.stringify(userData));
};

export const removeUserDataFromSessionStorage = (): void => {
    sessionStorage.removeItem(constants.USER_DATA);
};

export const getUserFromSessionStorage = () => {
    const jsonUserData: string | null = sessionStorage.getItem(constants.USER_DATA);
    if (jsonUserData == null) return null;

    const userData: IUser = JSON.parse(jsonUserData);
    return userData;
};

export const createUsersCollectionOnSessionStorage = (): void => {
    if (sessionStorage.getItem(constants.USERS_COLLECTION)) return;

    const jsonUsersCollection = JSON.stringify([]);
    sessionStorage.setItem(constants.USERS_COLLECTION, jsonUsersCollection);
};

export const getUsersCollectionFromSessionStorage = (): any => {
    const jsonUsersCollection: string | null = sessionStorage.getItem(constants.USERS_COLLECTION);
    if (!jsonUsersCollection) return [];

    const usersCollection: IUser[] = JSON.parse(jsonUsersCollection);
    return usersCollection;
};

export const addUserToUsersCollectionOnSessionStorage = (user: IUser): void => {
    const usersCollection = getUsersCollectionFromSessionStorage();
    usersCollection.push(user);

    const jsonUsersCollection: string = JSON.stringify(usersCollection);
    sessionStorage.setItem(constants.USERS_COLLECTION, jsonUsersCollection);
};

export const createTasksCollectionOnSessionStorage = (): void => {
    if (sessionStorage.getItem(constants.TASKS_COLLECTION)) return;

    const jsonTasksCollection: string = JSON.stringify([]);
    sessionStorage.setItem(constants.TASKS_COLLECTION, jsonTasksCollection);
};

export const getTasksCollectionFromSessionStorage = (): any => {
    const jsonTasksCollection: string | null = sessionStorage.getItem(constants.TASKS_COLLECTION);
    if (!jsonTasksCollection) return [];

    const TasksCollection: ITask[] = JSON.parse(jsonTasksCollection);
    return TasksCollection;
};

export const updateTasksCollectionOnSessionStorage = (tasksCollection: ITask[]): void => {
    const jsonTasksCollection: string = JSON.stringify(tasksCollection);

    sessionStorage.setItem(constants.TASKS_COLLECTION, jsonTasksCollection);
};
