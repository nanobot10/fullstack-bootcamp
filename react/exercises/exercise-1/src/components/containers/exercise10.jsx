import React from 'react';
import { useState } from 'react';

const Exercise10 = () => {

    let [r,g,b] = [0,0,0];

    const [divStyle, setDivStyle] = useState({
        backgroundColor: `rgb(${r},${g},${b})`
    });
    
    const [timer, setTimer] = useState(null);

    const changeColor = () => {
        r = getRndInteger(0,256);
        g = getRndInteger(0,256);
        b = getRndInteger(0,256);
        setDivStyle(
            {
                backgroundColor: `rgb(${r},${g},${b})`
            }
        );
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    return (
        <div 
            className='main-div' 
            style={divStyle} 
            onMouseEnter={() => setTimer(setInterval(() => changeColor() , 1000))} 
            onMouseLeave={() => clearInterval(timer)}
            onDoubleClick={() => clearInterval(timer)}
        >
            
        </div>
    );
}

export default Exercise10;
