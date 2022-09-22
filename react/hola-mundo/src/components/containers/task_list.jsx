import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Example description', true, LEVELS.NORMAL);
    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Tasks state has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList components is going to unmount...');
        }
    }, [tasks]);


    const changeCompleted = (id) => {
        console.log('Cambiar estado')
    }

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
                <TaskComponent task={defaultTask} />
            </div>        
        </div>
    );
};

export default TaskListComponent;
