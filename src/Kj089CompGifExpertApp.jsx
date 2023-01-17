
import React, { useState } from 'react';

import { Kj106InputAddCategory, Kj108GifGrid } from './KjComponentes'  //ojo index.js


export const Kj089CompGifExpertApp = () => {

  const [kjArrCategoriasInput, setkjArrCategoriasInput] = useState([]);
  
  const kjOnAgregarCategoria =(kjValor)=>{
    if(kjArrCategoriasInput.includes(kjValor) ) return;
    setkjArrCategoriasInput ([kjValor, ...kjArrCategoriasInput]);
  }

  return (
     <>
  
      <h1>Kj Titulo GifExpertApp</h1>
   
      <Kj106InputAddCategory 
          kjPropFuncOnNewCategory = { (kjValor1) => kjOnAgregarCategoria(kjValor1)}
      />
      {
        //le estoy diciendo: "cuando lo tengas el nuevo valor, yo te doy la función para que
        // lo actualices"
      }    

      {
        kjArrCategoriasInput.map( ( kjCategoria ) =>
            (
              <Kj108GifGrid 
                  key= { kjCategoria } 
                  kjPropCategoria = { kjCategoria } 
              />
            )
          )
      }


    </>
  )
}
