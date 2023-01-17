import { fireEvent, render, screen } from "@testing-library/react"
import { Kj105InputAddCategory } from '../../src/KjComponentes/Kj105InputAddCategory'



describe('Pruebas sobre kj105 Add Category', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 
        
         render( <Kj105InputAddCategory kjPropFuncOnNewCategory = { ()=>{} }  /> );
         
         //screen.debug();  // aqui el 'value' está vacio

         const kjInput = screen.getByRole('textbox');  //seleccionamos el elemento INPUT
         //console.log(kjInput)
        
          // le definimos las características del evento que le vamos a enchufar
          // te meto un objeto, cuyo target, tiene un valor de "saitama"
         fireEvent.input(kjInput, {target: { value: 'Saitama' }}  );
         // al meterle un input, el form ejecuta el "onchange"
         // el Onchange, llama al "kjOnEveryInputChange"
         // éste actualiza el valor
         // el valor se refleja en kjInput,value
         // ahora comparo si lo que le he metido, es lo que él ha guardado
         
         //screen.debug();  // acabo de cambiar el kjInput
         
         expect(kjInput.value ).toBe('Saitama');
    })

    

 })