import * as storageUtils from '../utils/storage.utils';

import Task, { ITask } from '../models/task.model';
import { Response, ISuccessResponse } from '../models/response.model';

export const getTasks = async (userID: string): Promise<ISuccessResponse> => {
    const tasksCollection: ITask[] = storageUtils.getTasksCollectionFromSessionStorage();

    const tasks = tasksCollection.filter((taskDoc: ITask) => taskDoc.userID === userID);

    return { status: 200, statusText: 'Ok', data: { tasks } };
};

export const createTask = async (userID: string, task: string): Promise<ISuccessResponse> => {
    const tasksCollection: ITask[] = storageUtils.getTasksCollectionFromSessionStorage();

    const taskDoc: ITask = new Task(userID, task);
    tasksCollection.push(taskDoc);

    storageUtils.updateTasksCollectionOnSessionStorage(tasksCollection);

    return { status: 201, statusText: 'Created', data: { task: taskDoc } };
};

export const updateTask = async (taskID: string, isCompleted: boolean): Promise<Response> => {
    const tasksCollection: ITask[] = storageUtils.getTasksCollectionFromSessionStorage();

    const task: ITask | undefined = tasksCollection.find((taskDoc: ITask) => taskDoc._id === taskID);
    if (!task) return { status: 400, statusText: 'Bad Request' };
    task.isCompleted = isCompleted;

    storageUtils.updateTasksCollectionOnSessionStorage(tasksCollection);

    return { status: 200, statusText: 'Ok', data: {} };
};

export const deleteTask = async (taskID: string): Promise<ISuccessResponse> => {
    const tasksCollection: ITask[] = storageUtils.getTasksCollectionFromSessionStorage();

    const updatedTasksCollection: ITask[] = tasksCollection.filter((taskDoc: ITask) => taskDoc._id !== taskID);

    storageUtils.updateTasksCollectionOnSessionStorage(updatedTasksCollection);

    return { status: 200, statusText: 'Ok', data: {} };
};
