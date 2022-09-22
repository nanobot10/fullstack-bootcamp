import React, {useState,useRef,useEffect} from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef();


    function incrementar1() {
        setContador1(contador1 + 1);
    }
    function incrementar2() {
        setContador2(contador2 + 1);
    }

    /**
     * Caso 1 UseEffect: Ejecutar siempre un snippet de código
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
    //     console.log('Mostrado referencia a elemento del DOM:')
    //     console.log(miRef)
    // });


     /**
     * Caso 1 UseEffect: Ejecutar cuando exista un cambio en contador1
     */
    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
    //     console.log('Mostrado referencia a elemento del DOM:')
    //     console.log(miRef)
    // }, [contador1]);


         /**
     * Caso 1 UseEffect: Ejecutar cuando exista un cambio en contador1 o contador2
     */
          useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
        console.log('Mostrado referencia a elemento del DOM:')
        console.log(miRef)
    }, [contador1, contador2]);

    return (
        <div>
            <h1>ERjemplo de useState, useRef y useEffect</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2: {contador2}</h2>
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <button onClick={incrementar1}>Contador 1</button>
            <button onClick={incrementar2}>Contador 2</button>
        </div>
    );
}

export default Ejemplo2;
