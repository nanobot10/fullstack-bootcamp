import React from 'react';
import {useHistory} from 'react-router-dom';

const LoginPage = () => {

    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => navigateTo('/register')}>Register</button>
        </div>
    );
}

export default LoginPage;
