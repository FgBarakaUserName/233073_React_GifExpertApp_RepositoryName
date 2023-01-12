
import React, { useState } from 'react';
import { Kj079InputAddCategory } from './KjComponentes/Kj079InputAddCategory.jsx'
//import { Kj081GifGrid } from './KjComponentes/Kj081GifGrid.jsx';
import { Kj082GifGrid } from './KjComponentes/Kj082GifGrid.jsx';

export const Kj082CompGifExpertApp = () => {

  const [kjArrCategoriasInput, setkjArrCategoriasInput] = useState(['kj cat 1']);
  
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
              <Kj082GifGrid 
                  key= { kjCategoria } 
                  kjPropCategoria = { kjCategoria } 
              />
            )
          )
      }


    </>
  )
}
