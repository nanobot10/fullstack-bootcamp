import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskForm = ({add, length}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }
    
    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input type="text" id='inputName' ref={nameRef} className='form-control form-control-lg' required autoFocus placeholder='Task name'/>
                <input type="text" id='inputDescription' ref={descriptionRef} className='form-control form-control-lg' required placeholder='Task description'/>
                <select ref={levelRef} id="selectPriority" defaultValue={LEVELS.NORMAL} className='form-control form-control-lg'>
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>
                {length > 0 ? 'Add New Task' : 'Create your first Task'}
            </button>
        </form>
    );
};


TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
};


export default TaskForm;
