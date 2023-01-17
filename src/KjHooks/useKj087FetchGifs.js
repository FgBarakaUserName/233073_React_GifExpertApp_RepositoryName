
import { useState, useEffect  } from "react";
import { Kj082GetGifsFromWeb } from "../KjHelpers/Kj082GetGifsFromWeb";

export const useKj087FetchGifs  = (kjCategoria) => {

    const [kjImagenesData, setKjImagenesData] = useState([])

    const [kjIsLoading, setKjIsLoading] = useState(true)
    
    const kjGetImagesData = async() =>{
       const kjNewImagesData = await Kj082GetGifsFromWeb(kjCategoria);
       setKjImagenesData(kjNewImagesData);
       setKjIsLoading(false);
    }  

    useEffect(() => {    //no se puede meter el KJ082Get..  porque es asincrono
      kjGetImagesData()
    }, [])
    
    return {
            kjImagenesData,
            kjIsLoading
        }

}
