
import React, { useState } from 'react';

import { Kj079InputAddCategory, Kj088GifGrid } from './KjComponentes'

export const Kj089CompGifExpertApp = () => {

  const [kjArrCategoriasInput, setkjArrCategoriasInput] = useState([]);
  
  const kjOnAgregarCategoria =(kjValor)=>{
    if(kjArrCategoriasInput.includes(kjValor) ) return;
    setkjArrCategoriasInput ([kjValor, ...kjArrCategoriasInput]);
  }

  return (
     <>
  
      <h1>Kj Titulo GifExpertApp</h1>
   
      <Kj079InputAddCategory 
          kjPropFuncOnNewCategory = { (kjValor1) => kjOnAgregarCategoria(kjValor1)}
      />
    
      {
        kjArrCategoriasInput.map( ( kjCategoria ) =>
            (
              <Kj088GifGrid 
                  key= { kjCategoria } 
                  kjPropCategoria = { kjCategoria } 
              />
            )
          )
      }


    </>
  )
}
