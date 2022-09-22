import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Example', 'Example description 1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Example description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Example description 3', false, LEVELS.BLOCKING);

    


    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Tasks state has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList components is going to unmount...');
        }
    }, [tasks]);


    const completeTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task) {
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/** Iterar con las tareas */}
                                {tasks.map((task, index) => <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}/>
        </div>
    );
};

export default TaskListComponent;
