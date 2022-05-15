import { createContext, ReactNode, useReducer } from 'react';
import { TasksContextType, TaskActions } from '../models/task.model';

import tasksReducer, { TASKS_INITIAL_STATE } from '../reducers/tasks.reducer';

type Props = {
    children: ReactNode;
};

export const TasksContext = createContext<TasksContextType>(null);

const TasksContextProvider = ({ children }: Props) => {
    const [tasksState, dispatchTasksState] = useReducer(tasksReducer, TASKS_INITIAL_STATE);

    const updateTasksState = (action: TaskActions): void => dispatchTasksState(action);

    const value = { tasksState, updateTasksState };

    return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};

export default TasksContextProvider;
