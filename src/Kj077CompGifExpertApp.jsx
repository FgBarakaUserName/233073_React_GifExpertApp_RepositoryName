
import React, { useState } from 'react';
import {Kj077InputAddCategory} from './KjComponentes/Kj077InputAddCategory.jsx'

export const Kj077CompGifExpertApp = () => {

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
   
      <Kj077InputAddCategory/>

      <button onClick = {kjOnBotonAgregarCategoria} >
          kj titulo botón agregar categoria
      </button>
      
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
