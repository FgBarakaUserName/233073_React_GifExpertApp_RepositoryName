import React from 'react'

export const Kj081GifGrid = ({ kjPropCategoria }) => {

  const kjGifs =[1,2,3];

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
