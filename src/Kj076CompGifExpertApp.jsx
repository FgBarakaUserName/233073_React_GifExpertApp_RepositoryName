

import React, { useState } from 'react';

export const Kj076CompGifExpertApp = () => {

  const [kjArrCategoriasInput, setkjArrCategoriasInput] = useState(['kj cat 1', 'kj cat 2']);
  const kjOnBotonAgregarCategoria =()=>{
    console.log("agregar");
    //una forma
        //setkjArrCategoriasInput ((kjCat) => ['nuevo valor', ...kjCat ]);
    //otra forma
    setkjArrCategoriasInput (['nuevo valor', ...kjArrCategoriasInput]);
  }

  return (
     <>
      {/* titulo */}
      <h1>Kj Titulo GifExpertApp</h1>
      {/* input */}

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
      {/*  Listado de Gifs  */}

    </>
  )
}
