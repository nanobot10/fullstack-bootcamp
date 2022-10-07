import React, { useState, useEffect } from 'react';
import {getRandomUser} from '../../services/axios-service';

const AxiosExample = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
       getRandomUser()
       .then((response) => {
        console.log(response.data.results[0]);
         setUser(response.data.results[0]);
       }).catch((error) => alert(`Something went wrong: ${error}`))
    }, []);

    return (
        <div>
            <h1>Axios Example</h1>
            {
                user  
                ?
                ( <div>
                    <h2> {user.email} </h2>
                </div> )
                :
                <p>Generate a new user</p>
            }
        </div>
    );
}

export default AxiosExample;
