
import { useKj087FetchGifs } from '../KjHooks/useKj087FetchGifs.js'
//import { Kj086GifCardItem } from './Kj086GifCardItem.jsx'
import { Kj102GifCardItem } from './Kj102GifCardItem.jsx'

export const Kj088GifGrid = ({ kjPropCategoria }) => {

  const { kjImagenesData, kjIsLoading } = useKj087FetchGifs (kjPropCategoria);
  
  return (
    <>
        <h2>{kjPropCategoria}</h2>
        {
            kjIsLoading &&  (<h1> cargando...  </h1>)     
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
