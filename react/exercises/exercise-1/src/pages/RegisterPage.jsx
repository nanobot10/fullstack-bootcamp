import React from 'react';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {

    const history = useHistory();

    return (
        <div>
            <h1>Register Page</h1>
            <button onClick={() => history.push('/')}>Login</button>
        </div>
    );
}

export default RegisterPage;
