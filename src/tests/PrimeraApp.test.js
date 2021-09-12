// import {render} from '@testing-library/react'

import { shallow } from 'enzyme';

import PrimeraApp2 from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {

    // test('Debe de mostrar el mensaje "Hola, Soy Cristian ME"', () => {
        
    //     const saludo = 'Hola, Soy Cristian ME';

    //     const wrapper = render( <PrimeraApp2 saludo={saludo} numero={0} /> );

    //     // Concatener !!! hace que la prueba falle pero es dificil de leer el error por eso se usará enzyme
    //     // expect(wrapper.getByText( saludo + '!!!' )).toBeInTheDocument();

    //     expect(wrapper.getByText( saludo )).toBeInTheDocument();

    // });
    
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {

        const numero = 0;
        const saludo = 'Hola, Soy Cristian ME';
        const wrapper = shallow( <PrimeraApp2 saludo={saludo} numero={numero} /> );

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('Debe de mostrar el subtitulo enviado por props', () => {

        const numero = 0;
        const saludo = 'Hola, Soy Cristian ME';
        const subtitulo = 'Este es un subtitulo cool';
        const wrapper = shallow(
            <PrimeraApp2
                saludo={saludo}
                numero={numero}
                subtitulo={subtitulo}
            />
        );

        // Buscar el parrafor con el subtitulo dentro del wrapper que contiene el componente renderizado
        const textoParrafo = wrapper.find('p').text();
        
        expect( textoParrafo ).toBe( subtitulo );

        
    })
    

});



