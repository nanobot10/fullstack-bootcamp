/*
    Ejemmplo de uso Hook useState

*/


import React, {useState} from 'react';

const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Dennis',
        email: 'c.alejandro17@gmail.com'
    }

    /**
     * Queremos que el valor inicial y persona inicial sean 
     * parte del estado del componente para así poder gestionar
     * su cambio y que este se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial);
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        setContador(contador + 1);
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        setPersona({
            nombre: 'Pepe',
            email: 'pepe@gmail.com'
        })    
    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            <button onClick={incrementarContador}>Incrementar Contador</button>           
            <button onClick={actualizarPersona}>Actualizar Persona</button>           
        </div>
    );
}

export default Ejemplo1;
