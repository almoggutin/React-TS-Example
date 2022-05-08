import { v4 as uuidv4 } from 'uuid';

import TasksActionTypes from '../actions/tasks.actions';

export interface ITask {
    _id: string;
    userID: string;
    task: string;
    isCompleted: boolean;
}

class Task implements ITask {
    _id: string;

    constructor(public userID: string, public task: string, public isCompleted: boolean = false) {
        this._id = uuidv4();
    }
}

export interface IInitTasksAction {
    type: TasksActionTypes;
    payload: {
        tasks: ITask[];
    };
}

export interface IAddTaskAction {
    type: TasksActionTypes;
    payload: {
        task: ITask;
    };
}

export interface IUpdateTaskAction {
    type: TasksActionTypes;
    payload: {
        index: number;
        isCompleted: boolean;
    };
}

export interface IDeleteTaskAction {
    type: TasksActionTypes;
    payload: {
        index: number;
    };
}

export default Task;
