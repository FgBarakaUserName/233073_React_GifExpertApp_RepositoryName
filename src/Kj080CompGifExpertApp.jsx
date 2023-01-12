
import React, { useState } from 'react';
import {Kj079InputAddCategory} from './KjComponentes/Kj079InputAddCategory.jsx'

export const Kj080CompGifExpertApp = () => {

  const [kjArrCategoriasInput, setkjArrCategoriasInput] = useState(['kj cat 1', 'kj cat 2']);
  
  const kjOnAgregarCategoria =(kjValor)=>{
    if(kjArrCategoriasInput.includes(kjValor) ) return;
    setkjArrCategoriasInput ([kjValor, ...kjArrCategoriasInput]);
  }

  return (
     <>
  
      <h1>Kj Titulo GifExpertApp</h1>
   
      <Kj079InputAddCategory 
          kjPropOnNewCategory = { (kjValor1) => kjOnAgregarCategoria(kjValor1)}
      />
    
      <ol>
        {
        kjArrCategoriasInput.map( kjElem =>
              {
               return <li key={kjElem}> {kjElem} </li>
              }
            )
        }
      </ol>

    </>
  )
}
