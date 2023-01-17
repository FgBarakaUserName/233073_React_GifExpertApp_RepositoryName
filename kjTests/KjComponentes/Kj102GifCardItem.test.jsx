import { render, screen } from "@testing-library/react"
import { Kj102GifCardItem } from "../../src/KjComponentes/Kj102GifCardItem"


describe('de kjxxxGifCardItem ', () => { 

    const kjTitle = "kj mi mama";
    const kjUrl = "https://media1.giphy.com/media/fwePpV0h0KKCjEaXWK/giphy-downsized-medium.gif?cid=c3a7f59cv7ny06c967zom367fknailgeywld0gr0mfv9as44&rid=giphy-downsized-medium.gif&ct=g"
    
    test('kj102 A. debe de hacer match con el snapshot', () => { 
    
        const { container } = render(
                <Kj102GifCardItem kjTitle={kjTitle}  kjUrl= {kjUrl} />
            )
     
        expect( container).toMatchSnapshot();
    })

 })
