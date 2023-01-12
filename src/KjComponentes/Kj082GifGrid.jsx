import React, { useState, useEffect } from 'react'
import {Kj082GetGifsFromWeb} from '.././KjHelpers/Kj082GetGifsFromWeb.js'

export const Kj082GifGrid = ({ kjPropCategoria }) => {

  const kjGifs =[1,2,3]
  
  useEffect(() => {
    
    Kj082GetGifsFromWeb(kjPropCategoria);
  }, [])
  
  return (
    <>
        <h3>{kjPropCategoria}</h3>
        {
           kjGifs.map(( kjDat ) => ( 
                    <p key={kjDat}>
                        {kjDat}
                    </p>
                )
           )
        }
    </>


  )
}
