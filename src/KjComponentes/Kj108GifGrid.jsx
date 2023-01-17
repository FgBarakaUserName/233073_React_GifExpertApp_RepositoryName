
import { useKj087FetchGifs } from '../KjHooks/useKj087FetchGifs.js'
import { Kj102GifCardItem } from './Kj102GifCardItem.jsx'
import PropTypes from 'prop-types'

export const Kj108GifGrid = ({ kjPropCategoria }) => {

  const { kjImagenesData, kjIsLoading } = useKj087FetchGifs (kjPropCategoria);
  
  return (
    <>
        <h2>{kjPropCategoria}</h2>
        {
            kjIsLoading &&  (<h1>cargando...</h1>)     
        }


        <div className = "kjCard-grid" >
            { kjImagenesData.map( (kjImagenData) => (
                  <Kj102GifCardItem 
                    key ={kjImagenData.kjId}
                    { ...kjImagenData }
                  />
              ))
            }
        </div>
         
    </>
  )
}

Kj108GifGrid.propTypes = {
  kjPropCategoria : PropTypes.string.isRequired
}