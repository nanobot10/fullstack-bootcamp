import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';

const HomePage = () => {

    const history = useHistory();
    const location = useLocation();

    const navigate = (path) => {
        history.push(path);
    }

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online=true',
            state: {
                online: false
            }
        })
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/profile')}>Go To Profile</button>
            <button onClick={() => navigateProps('/online-state')}>Go To State Page</button>

        </div>
    );
}

export default HomePage;
