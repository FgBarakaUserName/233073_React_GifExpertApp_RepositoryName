import { fireEvent, render, screen } from "@testing-library/react"
import { Kj106InputAddCategory } from '../../src/KjComponentes/Kj106InputAddCategory'



describe('Pruebas sobre kj107 Add Category', () => { 

    test('confirmar que se está llamando a OnNewCategory, y con el argumento', () => { 
        
        const kjInputValue = 'Saitama';
        const kjJESTonNewCategory = jest.fn()

        render( <Kj106InputAddCategory kjPropFuncOnNewCategory = { kjJESTonNewCategory }  /> );

        const kjInput = screen.getByRole('textbox');  //seleccionamos el elemento INPUT
        const kjForm = screen.getByRole('form');
       
        fireEvent.input(kjInput, {target: { value: kjInputValue }}  );
        fireEvent.submit(kjForm );
         //una vez que le damos al submit, lo primero que debiera hacer es inicializar
                 
        expect(kjInput.value ).toBe('');

        expect(kjJESTonNewCategory).toHaveBeenCalled();  // aqui confirmamos que ha sido llamado
        expect(kjJESTonNewCategory).toHaveBeenCalledTimes(1);  // aqui confirmamos que ha sido llamado
        expect(kjJESTonNewCategory).toHaveBeenCalledWith(kjInputValue) 
    })

    test('no debe llamar al onNewCategory, si el input está vacio', () => { 
        
       
        const kjJESTonNewCategory = jest.fn()

        render( <Kj106InputAddCategory kjPropFuncOnNewCategory = { kjJESTonNewCategory }  /> );
   
        const kjForm = screen.getByRole('form');
        fireEvent.submit(kjForm );
         //una vez que le damos al submit, lo primero que hace es inicializar
                 
        expect(kjJESTonNewCategory).not.toHaveBeenCalled();  
        expect(kjJESTonNewCategory).toHaveBeenCalledTimes(0);
        
    })

    

 })