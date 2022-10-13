import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/actions/actions';
import TodoList from '../pure/TodoList';


const todosFilter = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
    
        default:
            break;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: todosFilter(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoContainer;