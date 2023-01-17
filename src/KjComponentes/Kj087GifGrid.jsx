
import { useKj087FetchGifs } from '../KjHooks/useKj087FetchGifs.js'
import { Kj086GifCardItem } from './Kj086GifCardItem.jsx'
//import { Kj082GetGifsFromWeb } from '../KjHelpers/Kj082GetGifsFromWeb.js'

export const Kj087GifGrid = ({ kjPropCategoria }) => {

  const { kjImagenesData, kjIsLoading } = useKj087FetchGifs (kjPropCategoria);
  
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
