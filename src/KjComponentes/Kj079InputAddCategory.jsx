import React, { useState } from 'react'

export const Kj079InputAddCategory = ( { kjPropFuncOnNewCategory } ) => {

  const [kjInputValue, setkjInputValue] = useState("");

  const kjOnEveryInputChange = ( {target} ) => {
    //console.log(target.value)
    setkjInputValue(target.value);
  }

  const kjOnOneSubmit = (kjEvento3) => {
    kjEvento3.preventDefault();  //para evitar el refresco
    if  (kjInputValue.trim().length <=1) return;
    //console.log(kjInputValue);
    //aqui ejecuta la función que ha recibido, devolviendo el valor al padre
    kjPropFuncOnNewCategory(kjInputValue.trim())
    setkjInputValue(''); //para inicializar
  }

  /* vas metiendo letras en el INPUT, y va cambiando el KjInputValue
     cuando se da al ENTER, arranca el ONSUBMIT */
  return (
    <form onSubmit={ (kjEvento2) => kjOnOneSubmit(kjEvento2) }> 
      <input 
        type="text"
        placeholder='kj place holder'
        value={ kjInputValue }
        onChange={ (kjEvento1) => kjOnEveryInputChange(kjEvento1) } 
      />
    </form>
  )
}

