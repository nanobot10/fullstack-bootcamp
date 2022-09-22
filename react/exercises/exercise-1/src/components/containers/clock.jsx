import React, { useState, useEffect } from 'react';


const Clock = () => {
    const [data, setData] = useState(
        {
            fecha: new Date(),
            edad: 5,
            nombre: 'Martin',
            apellidos: 'San José'
        }
    );

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    },[]);

    const tick = () => {
        setData({
            nombre: 'Martin',
            apellidos: 'San José',
            edad: data.edad++,
            fecha: new Date()
        })
    }


    return (
        <div>
            <h2>
                Hora Actual: {data.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {data.nombre} {data.apellidos}
            </h3>
            <h1>
                Edad: {data.edad}
            </h1>
        </div>
    );
}

export default Clock;
