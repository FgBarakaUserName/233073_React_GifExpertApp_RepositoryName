

import React, { useState } from 'react';

export const Kj075CompGifExpertApp = () => {

  const [kjArrCategoriasInput, setkjArrCategoriasInput] = useState(['kj cat 1', 'kj cat 2']);
  console.log(kjArrCategoriasInput)

  return (
     <>
      {/* titulo */}
      <h1>Kj Titulo GifExpertApp</h1>
      {/* input */}
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
