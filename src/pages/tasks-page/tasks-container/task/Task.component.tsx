import { useContext, useState, useEffect } from 'react';
import './task.styles.scss';

import { TasksContext } from '../../../../contexts/Tasks.context';
import * as taskActions from '../../../../actions/tasks.actions';

import Button from '../../../../components/button/Button.component';

import * as tasksService from '../../../../services/tasks.service';
import { TasksContextType } from '../../../../models/task.model';

type Props = {
    id: string;
    index: number;
    task: string;
    isCompleted: boolean;
};

const Task = ({ id, index, task, isCompleted }: Props) => {
    const { updateTasksState } = useContext<TasksContextType>(TasksContext)!;

    const [taskClassName, setTaskClassName] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleTaskCompletion = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        const checkbox = event.target;
        const isChecked = checkbox.checked;

        try {
            await tasksService.updateTask(id, isChecked);

            updateTasksState(taskActions.updateTaskAction(index, isChecked));
            setIsCheckboxChecked(isChecked);
            isChecked ? setTaskClassName('completed') : setTaskClassName('');
        } catch (err: any) {
            alert('Something went wrong.');
        }
    };

    const handleTaskDeletion = async (): Promise<void> => {
        try {
            await tasksService.deleteTask(id);

            updateTasksState(taskActions.deleteTaskAction(index));
        } catch (err) {
            alert('Something went wrong.');
        }
    };

    useEffect((): void => {
        if (isCompleted) {
            setTaskClassName('completed');
            setIsCheckboxChecked(true);

            return;
        }

        setTaskClassName('');
        setIsCheckboxChecked(false);
    }, []);

    return (
        <div className="task">
            <div className="content">
                <input type="checkbox" checked={isCheckboxChecked} onChange={handleTaskCompletion} />

                <h3 className={taskClassName}>{task}</h3>
            </div>

            <Button type="button" handleClick={handleTaskDeletion}>
                Delete
            </Button>
        </div>
    );
};

export default Task;
