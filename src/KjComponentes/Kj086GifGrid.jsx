import React, { useState, useEffect } from 'react'
import { Kj082GetGifsFromWeb } from '../KjHelpers/Kj082GetGifsFromWeb.js'
import { Kj086GifCardItem } from './Kj086GifCardItem.jsx'

export const Kj086GifGrid = ({ kjPropCategoria }) => {

  const [kjImagenesData, setKjImagenesData] = useState([])

  const kjGetImagesData = async() =>{
     const kjNewImagesData = await Kj082GetGifsFromWeb(kjPropCategoria);
     setKjImagenesData(kjNewImagesData);
  }  
  
  useEffect(() => {    //no se puede meter el KJ082Get..  porque es asincrono
    kjGetImagesData()
  }, [])

  //console.log(kjImagenesData);
  
  return (
    <>
        <h3>{kjPropCategoria}</h3>
        <div className = "kjCard-grid" >
            { kjImagenesData.map( (kjImagenData) => (
                  <Kj086GifCardItem 
                    key ={kjImagenData.kjId}
                    { ...kjImagenData }
                  />
              ))
            }
        </div>
         
    </>
  )
}
