
import React, { useState } from 'react';
import { Kj079InputAddCategory } from './KjComponentes/Kj079InputAddCategory.jsx'
import { Kj081GifGrid } from './KjComponentes/Kj081GifGrid.jsx';

export const Kj081CompGifExpertApp = () => {

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
    
      {
        kjArrCategoriasInput.map( ( kjCategoria ) =>
            (
              <Kj081GifGrid 
                  key= { kjCategoria } 
                  kjPropCategoria = { kjCategoria } 
              />
            )
          )
      }


    </>
  )
}
