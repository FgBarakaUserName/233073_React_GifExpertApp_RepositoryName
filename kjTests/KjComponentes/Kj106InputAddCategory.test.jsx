import { fireEvent, render, screen } from "@testing-library/react"
import { Kj106InputAddCategory } from '../../src/KjComponentes/Kj106InputAddCategory'



describe('Pruebas sobre kj106 Add Category', () => { 

    test('despues el submit, el input debe estar vacio', () => { 
        
        const kjInputValue = 'Saitama';

        render( <Kj106InputAddCategory kjPropFuncOnNewCategory = { ()=>{} }  /> );

        const kjInput = screen.getByRole('textbox');  //seleccionamos el elemento INPUT
        const kjForm = screen.getByRole('form');
       
        fireEvent.input(kjInput, {target: { value: kjInputValue }}  );
        fireEvent.submit(kjForm );
         //una vez que le damos al submit, lo primero que debiera hacer es inicializar
                 
        expect(kjInput.value ).toBe('');
    })

    

 })