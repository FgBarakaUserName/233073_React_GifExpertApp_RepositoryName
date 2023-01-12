
import React, { useState } from 'react';
import {Kj078InputAddCategory} from './KjComponentes/Kj078InputAddCategory.jsx'

export const Kj078CompGifExpertApp = () => {

  const [kjArrCategoriasInput, setkjArrCategoriasInput] = useState(['kj cat 1', 'kj cat 2']);
  const kjOnBotonAgregarCategoria =()=>{
    //una forma
        //setkjArrCategoriasInput ((kjCat) => ['nuevo valor', ...kjCat ]);
    //otra forma
    setkjArrCategoriasInput (['nuevo valor', ...kjArrCategoriasInput]);
  }

  return (
     <>
  
      <h1>Kj Titulo GifExpertApp</h1>
   
      <Kj078InputAddCategory kjPropSetArrCat = { setkjArrCategoriasInput } />
    
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
