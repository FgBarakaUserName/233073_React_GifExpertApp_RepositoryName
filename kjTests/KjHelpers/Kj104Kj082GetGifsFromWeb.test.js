import { Kj082GetGifsFromWeb } from "../../src/KjHelpers/Kj082GetGifsFromWeb";

describe('kj104 test en Getgifs ', () => { 
    
    const kjCat = "kj mi mama"
    
    test('kj104 A debe devolover un array que al menos tenga un elemento', async () => { 
    
        const kjGifs = await Kj082GetGifsFromWeb (kjCat);
        //console.log(kjGifs);
        expect(kjGifs.length ). toBeGreaterThan ( 0);
      
    });
    
    test('kj104 B debe devolover un array con el contenido del objeto que espero', async () => { 
    
        const kjGifs = await Kj082GetGifsFromWeb (kjCat);
        console.log(kjGifs);
        expect(kjGifs[0]).toEqual( 
            {
                kjId : expect.any( String ),
                kjTitle : expect.any( String ),
                kjUrl: expect.stringContaining('https://')
            }

        );
      
    });

})