import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ submit }) => {

    const newText = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        submit(newText.current.value);
        newText.current.value = '';
    }

    return (
        <div>
            <h2>Create your todo</h2>
            <form onSubmit={onSubmit}>
                <input type="text"  ref={newText}/>
                <button  type="submit">Add Todo</button>
            </form>
        </div>
    );
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TodoForm;
