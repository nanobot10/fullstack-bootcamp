import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFoundPage = () => {
    const history = useHistory();
    const navigate = (path) => {
        history.push(path);
    }

    return (
        <div>
            <h1>404 - Page not found</h1>
            <button onClick={()=> navigate('/')}>Go back to home</button>
        </div>
    );
}

export default NotFoundPage;
