import React, { useState, useEffect } from 'react'
import {Kj082GetGifsFromWeb} from '../KjHelpers/Kj082GetGifsFromWeb.js'

export const Kj085GifGrid = ({ kjPropCategoria }) => {

  const kjGifs =[1,2,3]

  const [kjImagenes, setKjImagenes] = useState([])

  const kjGetImages = async() =>{
     const kjNewImages = await Kj082GetGifsFromWeb(kjPropCategoria);
     setKjImagenes(kjNewImages);
  }  
  
  useEffect(() => {    //no se puede meter el KJ082Get..  porque es asincrono
    kjGetImages()
  }, [])
  
  return (
    <>
        <h3>{kjPropCategoria}</h3>
        {
           kjImagenes.map( ({kjId, kjTitle})  => ( 
            <li key={kjId}>
                {kjTitle}
            </li>
        )
   )
        }
    </>


  )
}
