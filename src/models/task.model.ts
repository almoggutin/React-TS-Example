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
    type: TasksActionTypes.INIT_TASKS;
    payload: {
        tasks: ITask[];
    };
}

export interface IAddTaskAction {
    type: TasksActionTypes.ADD_TASK;
    payload: {
        task: ITask;
    };
}

export interface IUpdateTaskAction {
    type: TasksActionTypes.UPDATE_TASK;
    payload: {
        index: number;
        isCompleted: boolean;
    };
}

export interface IDeleteTaskAction {
    type: TasksActionTypes.DELETE_TASK;
    payload: {
        index: number;
    };
}

export interface ITasksContext {
    tasksState: ITask[];
    updateTasksState: (action: TaskActions) => void;
}

export type TasksContextType = ITasksContext | null;

export type TasksState = ITask[];

export type TaskActions = IInitTasksAction | IAddTaskAction | IUpdateTaskAction | IDeleteTaskAction;

export default Task;
