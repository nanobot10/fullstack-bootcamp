import React, {useState} from 'react';


let red = 0;
let green = 200;
let blue = 100;

// Estilo usuario loggueado
const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold'
};
// Estilo usuario no logueado
const unlogguedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}



// Login / Logout buttons

const LoginButton = ({loginAction, loggedStyle}) => {
    return <button onClick={loginAction} style={loggedStyle}>Login</button>
}
const LogoutButton = ({logoutAction, unlogguedStyle}) => {
    return <button onClick={logoutAction} style={unlogguedStyle}>Logout</button>
}

// ? (Expression true) && expresion => se renderica la expresion
// ? (Expression false) && expresion => no se renderica la expresion




const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [messages, setMessages] = useState(0)

    const loginAction = () => {
        setAccess(true);
    }
    
    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    if(access) {
        optionalButton = <LogoutButton unlogguedStyle={unlogguedStyle} logoutAction={logoutAction} />
    } else {
        optionalButton = <LoginButton loggedStyle={loggedStyle} loginAction={loginAction} />
    }

    // Unread messages
    let addMessages = () => {
        setMessages(messages + 1);
    }

    return (
        <div>
            {/* Optional button */}
            {optionalButton}
            {access &&
                <div>
                {
                    messages > 0 ?
                    <p>You have {messages} new message{messages > 1 ? 's' : null} ...</p>
                    :
                    <p>There are no new messages</p>
                }   
                <button onClick={addMessages}>Add new Message</button>
                </div>
            }
            
        </div>
    );
}

export default OptionalRender;
