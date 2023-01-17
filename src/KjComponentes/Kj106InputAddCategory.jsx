import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const Kj106InputAddCategory = ( { kjPropFuncOnNewCategory }  ) => {

  const [kjInputValue, setkjInputValue] = useState("");

  const kjOnEveryInputChange = ( {target} ) => {
    //console.log(target);
    setkjInputValue(target.value);
  }

  const kjOnOneSubmit = (kjEvento3) => {
    kjEvento3.preventDefault();  //para evitar el refresco
    if  (kjInputValue.trim().length <=1) return;
    //console.log(kjInputValue);
    //aqui ejecuta la función que ha recibido, devolviendo el valor al padre
    setkjInputValue(''); //para inicializar
    kjPropFuncOnNewCategory(kjInputValue.trim())
  }

  /* vas metiendo letras en el INPUT, y va cambiando el KjInputValue
     cuando se da al ENTER, arranca el ONSUBMIT */
  return (
    <form onSubmit={ (kjEvento2) => kjOnOneSubmit(kjEvento2) }  aria-label='form'> 
      <input 
        type="text"
        placeholder='kj place holder'
        value={ kjInputValue }
        onChange={ kjOnEveryInputChange } 
      />
    </form>
  )
}


Kj106InputAddCategory.propTypes = {

  kjPropFuncOnNewCategory : PropTypes.func.isRequired,
}

