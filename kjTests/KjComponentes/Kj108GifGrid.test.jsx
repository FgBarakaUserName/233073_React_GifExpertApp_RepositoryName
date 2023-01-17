import { render, screen } from "@testing-library/react";
import { Kj108GifGrid } from "../../src/KjComponentes/Kj108GifGrid";


describe('kj108 pruebas en GigGrid', () => { 

    const kjCategoria = 'one punch';

    test('debe de mostrar el CARGANDO inicialmente', () => { 

        render(<Kj108GifGrid kjPropCategoria = {kjCategoria}/>);
        screen.debug();
        expect( screen.getByText('cargando...') ).toBeTruthy;
        expect( screen.getByText(kjCategoria) ).toBeTruthy;



    })


 })