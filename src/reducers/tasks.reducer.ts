import _ from 'lodash';

import tasksActionTypes from '../actions/tasks.actions';
import { TasksState, TaskActions } from '../models/task.model';

export const TASKS_INITIAL_STATE: TasksState = [];

const tasksReducer = (state: TasksState, action: TaskActions): TasksState => {
    switch (action.type) {
        case tasksActionTypes.INIT_TASKS: {
            const { tasks } = action.payload;

            return _.cloneDeep(tasks);
        }
        case tasksActionTypes.ADD_TASK: {
            const { task } = action.payload;

            const updatedTasks = _.cloneDeep(state);
            updatedTasks.push(task);

            return updatedTasks;
        }
        case tasksActionTypes.UPDATE_TASK: {
            const { index, isCompleted } = action.payload;

            const updatedTasks = _.cloneDeep(state);
            updatedTasks[index].isCompleted = isCompleted;

            return updatedTasks;
        }
        case tasksActionTypes.DELETE_TASK: {
            const { index } = action.payload;

            const updatedTasks = _.cloneDeep(state);
            updatedTasks.splice(index, 1);

            return updatedTasks;
        }
        default:
            return state;
    }
};

export default tasksReducer;
