/**
 * Ejemplo de uso del método de ciclo de vida 
 * en componente de clase y el hook de ciclo 
 * de vida en componente funcional
 */


import React, { Component, useEffect } from 'react'

export  class DidMount extends Component {

    componentDidMount() {
        console.log('Compoartamiento antes de que el componente dea añadido al DOM ')
    }

  render() {
    return (
      <div>
        <h1>
            DidMount
        </h1>
      </div>
    )
  }
}

export const DidMountHook = () => {
    useEffect(() => {
        console.log('Compoartamiento antes de que el componente dea añadido al DOM ')
    },[]);
    return (
        <div>
            <h1>
                DidMount
            </h1>
        </div>
    )
}