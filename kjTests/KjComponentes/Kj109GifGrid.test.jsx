import { render, screen } from "@testing-library/react";
import { Kj108GifGrid } from "../../src/KjComponentes/Kj108GifGrid";
import { useKj087FetchGifs } from '../../src/KjHooks/useKj087FetchGifs';

jest.mock('../../src/KjHooks/useKj087FetchGifs');

describe('kj109 pruebas en GigGrid', () => { 

    const kjCategoria = 'one punch';

    test('debe de mostrar el CARGANDO inicialmente', () => { 

        useKj087FetchGifs.mockReturnValue({
            kjImagenesData : [],
            kjIsLoading : true
        });

        render(<Kj108GifGrid kjPropCategoria = {kjCategoria}/>);
        expect( screen.getByText('cargando...') ).toBeTruthy;
        expect( screen.getByText(kjCategoria) ).toBeTruthy;
    })

    test('debe de mostrar las imagenes', () => { 

        const kjGifsMock =[
                {kjId : 'id1', kjTitle: "kjTitle 1", kjUrl:'http/url1'},
                {kjId : 'id2', kjTitle: "kjTitle 2", kjUrl:'http/url2'},
                {kjId : 'id3', kjTitle: "kjTitle 3", kjUrl:'http/url3'}
            ];


        useKj087FetchGifs.mockReturnValue({
            kjImagenesData : kjGifsMock,
            kjIsLoading : false
        });

        render(<Kj108GifGrid kjPropCategoria = {kjCategoria}/>);
        screen.debug()
        expect( screen.getAllByRole('img').length).toBe(3);  
    })


 })