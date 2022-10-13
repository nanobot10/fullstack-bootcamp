import React, {useContext, useReducer} from 'react';
import { useRef } from 'react';

// ACTIONS
const ADD = 'ADD';
const DELETE = 'DELETE';
const FILTER = 'FILTER';



const initialState = [];
let counter = 0;

const myContext = React.createContext(null);

const taskReducer = (state = initialState, action) => {
    console.log('entre a task reducer');
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    id: counter++,
                    text: action.payload
                }
            ]
        case DELETE:
            return state.filter((todo) => action.payload !== todo.id);
        
        default:
            return state;
    }
}

const Task = ({deleteTask}) => {
    const state = useContext(myContext);

    return (
        <>
            <h1>My Tasks</h1>
            <ul>
                {state.map((task, index) =>
                    (
                        <li key={index} onClick={() => deleteTask(task.id)}> {task.id} - {task.text} </li>
                    )
                )}
            </ul>
        </>
    )
}

const TaskList = () => {

    const [state, dispatch] = useReducer(taskReducer, initialState);
    const newTask = useRef();

    const deleteTask = (id) => {
        dispatch({type: DELETE, payload: id})
    }


    return (
        <myContext.Provider value={state}>
            <Task deleteTask={deleteTask}/>
            <input type="text" ref={newTask}/>
            <button onClick={() => dispatch({type: ADD, payload: newTask.current.value})}>ADD</button>
            
        </myContext.Provider>
    );
}

export default TaskList;
