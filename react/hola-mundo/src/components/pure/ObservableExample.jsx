import React from 'react';
import { useState } from 'react';
import { getNumbers } from '../../services/ObservableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {
        console.log('Subscription to Observable');
        getNumbers().subscribe(
            {
                next(newNumber) {
                    console.log('New Number: ', newNumber);
                    setNumber(newNumber);
                }, 
                error(error) {
                    alert(`Something went wrong: ${error}`)
                    console.log('Error in observable');
                },
                complete() {
                    alert(`Finished with: ${number}`)
                }
            }
        )
        console.log('Finished subscription');
    }


    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumbers}>Obtain numbers</button>
        </div>
    );
}

export default ObservableExample;
