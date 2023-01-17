import { render, screen } from "@testing-library/react"
import { Kj102GifCardItem } from "../../src/KjComponentes/Kj102GifCardItem"


describe('de kjxxxGifCardItem ', () => { 

    const kjTitle = "kj mi mama";
    const kjUrl = "https://media1.giphy.com/media/fwePpV0h0KKCjEaXWK/giphy-downsized-medium.gif?cid=c3a7f59cv7ny06c967zom367fknailgeywld0gr0mfv9as44&rid=giphy-downsized-medium.gif&ct=g"
    
    
    test('kj103  B1 debe de mostrar la imagen con el URL y el ALT indicado', () => { 
       
        render(<Kj102GifCardItem kjTitle={kjTitle}  kjUrl= {kjUrl} />);
        //screen.debug();

        expect( screen.getByRole('img').src).toBe( kjUrl );
        expect( screen.getByRole('img').alt).toBe( kjTitle );
     })

     test('kj103 B2 debe de mostrar la imagen con el URL y el ALT indicado', () => { 
       
        render(<Kj102GifCardItem kjTitle={kjTitle}  kjUrl= {kjUrl} />);
        //screen.debug();

        const { src , alt } = screen.getByRole( 'img');
        expect( src ).toBe( kjUrl );
        expect( alt ).toBe( kjTitle );
     })

     test('kj103 C debe de mostrar el texto indicado', () => { 
       
        render(<Kj102GifCardItem kjTitle={kjTitle}  kjUrl= {kjUrl} />);
        //screen.debug();
        expect( screen.getByText( kjTitle).toBeTruthy);
     })



 })
