
import React, { useState } from 'react';
import { Kj079InputAddCategory } from './KjComponentes/Kj079InputAddCategory.jsx'
//import { Kj081GifGrid } from './KjComponentes/Kj081GifGrid.jsx';
//import { Kj082GifGrid } from './KjComponentes/Kj082GifGrid.jsx';
//import { Kj085GifGrid } from './KjComponentes/Kj085GifGrid.jsx';
//import { Kj086GifGrid } from './KjComponentes/Kj086GifGrid.jsx';
//import { Kj087GifGrid } from './KjComponentes/Kj087GifGrid.jsx';
import { Kj088GifGrid } from './KjComponentes/Kj088GifGrid.jsx';

export const Kj085CompGifExpertApp = () => {

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
