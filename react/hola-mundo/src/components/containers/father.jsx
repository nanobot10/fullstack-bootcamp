import React from 'react';
import { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Dennis');

    function showMessage(text) {
        alert(`Message received: ${text}`);
    }

    function updateName (newName) {
        setName(newName);
    }

    return (
        <div style={{backgroundColor: 'tomato', padding:'10px'}}>
            <Child name={name} send={showMessage} update={updateName}/>
        </div>
    );
}

export default Father;
