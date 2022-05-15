import { useContext } from 'react';
import './tasks-container.styles.scss';

import { TasksContext } from '../../../contexts/Tasks.context';

import Task from './task/Task.component';
import { TasksContextType } from '../../../models/task.model';

type Props = {};

const TasksContainer = () => {
    const { tasksState } = useContext<TasksContextType>(TasksContext)!;

    return (
        <ul className="tasks-container">
            {tasksState.length === 0 ? (
                <div className="empty-list">Your list is empty</div>
            ) : (
                tasksState.map(({ _id, task, isCompleted }, index) => (
                    <Task key={_id} id={_id} index={index} task={task} isCompleted={isCompleted} />
                ))
            )}
        </ul>
    );
};

export default TasksContainer;
