import React, { useState } from 'react'

export const Kj078InputAddCategory = ({ kjPropSetArrCat }) => {

  const [kjInputValue, setkjInputValue] = useState("");

  const kjOnInputChange = ( {target} ) => {
    //console.log(target.value)
    setkjInputValue(target.value);
  }

  const kjOnSubmit = (kjEvento2) => {
    kjEvento2.preventDefault();  //para evitar el refresco
    if  (kjInputValue.trim().length <=1) return;
    console.log(kjInputValue);
    kjPropSetArrCat((kjCate)=>[kjInputValue, ...kjCate]);
    setkjInputValue(''); //para inicializar
  }
  
  return (
    <form onSubmit={ (kjEvento2) => kjOnSubmit(kjEvento2) }>
      <input 
        type="text"
        placeholder='kj place holder'
        value={ kjInputValue }
        onChange={ (kjEvento1) => kjOnInputChange(kjEvento1) }
      />
    </form>
  )
}

