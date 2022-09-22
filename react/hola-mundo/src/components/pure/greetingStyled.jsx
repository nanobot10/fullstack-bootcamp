import React, { useState } from 'react';


// Definiendo estilos en contantes

// Estilo usuario loggueado
const loggedStyle = {
    color: 'blue'
};
// Estilo usuario no logueado
const unlogguedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [loggued, setLoggued] = useState(false);

    return (
        <div style={loggued ? loggedStyle : unlogguedStyle}>
            {
                loggued ?
                    <p>
                        Hola, {props.name}
                    </p>
                    :
                    <p>Please Login</p>
            }
            <button onClick={() => setLoggued(!loggued)}>
                {
                    loggued
                        ? 'Logout'
                        : 'Login'
                }
            </button>
        </div>
    );
}

export default GreetingStyled;
