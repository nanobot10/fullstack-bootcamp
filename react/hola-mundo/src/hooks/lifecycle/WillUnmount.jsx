import React, { Component, useEffect } from 'react'

export  class WillUnmount extends Component {
    componentWillUnmount() {
        console.log('Comportamiento antes de que el ecomponente desaparezca');
    }
  render() {
    return (
      <div>
        <h1>
            WillUnmount
        </h1>
      </div>
    )
  }
}


export const WillUnmountHook = () => {

    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el ecomponente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>
            WillUnmount
            </h1>      
        </div>
    );
}


