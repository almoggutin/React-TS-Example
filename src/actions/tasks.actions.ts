import { ITask, IInitTasksAction, IAddTaskAction, IUpdateTaskAction, IDeleteTaskAction } from '../models/task.model';

enum TasksActionTypes {
    INIT_TASKS = 'INIT_TASKS',
    ADD_TASK = 'ADD_TASK',
    UPDATE_TASK = 'UPDATE_TASK',
    DELETE_TASK = 'DELETE_TASK',
}

export const initTasksAction = (tasks: ITask[]): IInitTasksAction => ({
    type: TasksActionTypes.INIT_TASKS,
    payload: {
        tasks,
    },
});

export const addTaskAction = (task: ITask): IAddTaskAction => ({
    type: TasksActionTypes.ADD_TASK,
    payload: {
        task,
    },
});

export const updateTaskAction = (index: number, isCompleted: boolean): IUpdateTaskAction => ({
    type: TasksActionTypes.UPDATE_TASK,
    payload: {
        index,
        isCompleted,
    },
});

export const deleteTaskAction = (index: number): IDeleteTaskAction => ({
    type: TasksActionTypes.DELETE_TASK,
    payload: {
        index,
    },
});

export default TasksActionTypes;
