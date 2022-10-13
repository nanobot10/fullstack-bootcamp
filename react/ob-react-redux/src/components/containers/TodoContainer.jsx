import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../pure/TodoList'

export const TodoContainer = (props) => {
  return (
    <div>TodoContainer</div>
  )
}

// Filter Todo List
const filterTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        default:
            return todos;
            
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}



const TodosContainer =  connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodosContainer;