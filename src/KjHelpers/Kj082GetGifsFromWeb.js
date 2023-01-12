
export const Kj082GetGifsFromWeb = async ( kjPropCategoria )=>{
    const KJCONSTAPIKEY = 'g6ccPAl7rTy6sDE2tOlukuwmV7vmjZYZ';
    const KJCONSTLIMITE = 5;
    const kjUrl = `https://api.giphy.com/v1/gifs/search?api_key=${ KJCONSTAPIKEY }&q=${ kjPropCategoria }&limit=${KJCONSTLIMITE}`;
    const kjResp = await fetch (kjUrl);
    // con el igual hacemos que data tenga un Array aunque esté vacio
    const { data =[] } = await kjResp.json();
    //console.log(data);
    const kjGifsData = data.map ( kjImg => ({ 
      kjId : kjImg.id,
      kjTitle : kjImg.title,
      kjUrl: kjImg.images.downsized_medium.url
    }));
    //console.log(kjGifs);
    return kjGifsData;
  }