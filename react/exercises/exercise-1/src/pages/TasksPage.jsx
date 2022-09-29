import React from 'react';
import { useHistory } from 'react-router-dom';

const TasksPage = () => {

    const history = useHistory();

    return (
        <div>
            <h1>Task Page</h1>
            <button onClick={()=> history.push('/')}>Logout</button>
        </div>
    );
}

export default TasksPage;
