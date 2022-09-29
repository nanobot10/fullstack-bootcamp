import React from 'react';
import {useLocation} from 'react-router-dom';

export default function StatePage() {

    const location = useLocation();
    console.log(location.state.online);
    console.log(location.search);


  return (
    <div>
        <h1>State: {location.state.online ? 'The user is online' : 'The user is offline'}</h1>
    </div>
  )
}
