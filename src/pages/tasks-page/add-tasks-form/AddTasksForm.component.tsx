import React, { useState, useRef, useContext } from 'react';
import './add-tasks-form.styles.scss';

import { AuthContext } from '../../../contexts/Auth.context';
import { TasksContext } from '../../../contexts/Tasks.context';
import { addTaskAction } from '../../../actions/tasks.actions';

import Button from '../../../components/button/Button.component';

import { createTask } from '../../../services/tasks.service';
import { AuthContextType, IAuthState } from '../../../models/auth.model';
import { TasksContextType } from '../../../models/task.model';

type Props = {};

const AddTasksForm = () => {
    const { authState } = useContext<AuthContextType>(AuthContext)!;
    const { updateTasksState } = useContext<TasksContextType>(TasksContext)!;

    const [isInputValid, setIsInputValid] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);

    const inputEl = useRef<HTMLInputElement>(null);
    const formEl = useRef<HTMLFormElement>(null);

    const handleInput = (): void => {
        const taskInput = (inputEl.current as HTMLInputElement).value.trim();

        taskInput === '' ? setIsInputValid(false) : setIsInputValid(true);
        taskInput === '' ? setIsFormValid(false) : setIsFormValid(true);
    };

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();

        const taskInput = (inputEl.current as HTMLInputElement).value.trim();

        try {
            const res = await createTask((authState as IAuthState).userID, taskInput);
            const { task } = res.data;

            updateTasksState(addTaskAction(task));

            (formEl.current as HTMLFormElement).reset();
        } catch (err) {
            alert('Something went wrong.');
        }
    };

    return (
        <form ref={formEl} className="add-tasks-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input ref={inputEl} type="text" onInput={handleInput} />

                <Button type="submit" className="add-task-btn" disabled={!isFormValid}>
                    Add
                </Button>
            </div>

            {!isInputValid && <div className="error-message">You must add a task</div>}
        </form>
    );
};

export default AddTasksForm;
