
import { useKjFetchGifs } from '../KjHooks/useKjFetchGifs .js'
import { Kj086GifCardItem } from './Kj086GifCardItem.jsx'

export const Kj088GifGrid = ({ kjPropCategoria }) => {

  const { kjImagenesData, kjIsLoading } = useKjFetchGifs (kjPropCategoria);
  
  return (
    <>
        <h2>{kjPropCategoria}</h2>
        {
            kjIsLoading &&  (<h1> cargando...  </h1>)     
        }


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
