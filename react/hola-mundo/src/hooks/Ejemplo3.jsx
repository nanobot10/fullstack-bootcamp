import React, {useState, useContext}  from 'react';

const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es {state.token}
            </h1>
            <Componente2/>
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesión es: {state.sesion}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: '12345',
        sesion: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial);


    function actualizarSesion () {
        setSessionData({
            token: 'JWTAFSADFASD',
            sesion: sessionData.sesion + 1
        })
    }

    return (
        <miContexto.Provider value={sessionData}>
            <Componente1/>
            <button onClick={actualizarSesion}>Actualizar Sessión</button>
        </miContexto.Provider>
    )
}



