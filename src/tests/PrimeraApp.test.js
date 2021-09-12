import {render} from '@testing-library/react'
import PrimeraApp2 from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    test('Debe de mostrar el mensaje "Hola, Soy Cristian ME"', () => {
        
        const saludo = 'Hola, Soy Cristian ME';

        const wrapper = render( <PrimeraApp2 saludo={saludo} numero={0} /> );

        // Concatener !!! hace que la prueba falle pero es dificil de leer el error por eso se usará enzyme
        // expect(wrapper.getByText( saludo + '!!!' )).toBeInTheDocument();

        expect(wrapper.getByText( saludo )).toBeInTheDocument();

    });
    
    
});



