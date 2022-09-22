import React, {useRef} from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton() {
        const message = messageRef.current.value;
        alert(`Input value: ${message}`);
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{backgroundColor: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('On mouse over')}>Nombre: {name}</p>
            <button onClick={() => console.log('Boton 1 pulsado')}>
                Botón 1
            </button>
            <button onClick={pressButton}>
                Botón 2
            </button>
            <button onClick={() => pressButtonParams('Hello')}>
                Botón 3
            </button>
            <input type="text" placeholder='send a text to your father' onFocus={() => console.log('input focus')} 
                onChange={(e) => console.log('Input on change:', e.target.value)}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send message
            </button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input type="text" placeholder='New Name' ref={nameRef}/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
