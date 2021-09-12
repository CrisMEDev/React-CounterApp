import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en el componente CounterApp', () => {

    let wrapper = shallow( <CounterApp /> );;
    
    // Funcion que se ejecuta antes de cada una de las evaluaciones
    beforeEach( () => {
        // Para renderizar el componente antes de cada prueba
        wrapper = shallow( <CounterApp /> );
    });
    
    test('Debe mostrar <CounterApp /> correctamente', () => {

        const value = 10;

        const wrapper = shallow(
            <CounterApp
                
            />
        );

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('Debe mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(
            <CounterApp
                value={100}
            />
        );

        const valorPorDefecto = wrapper.find('h2').text().trim();

        expect( valorPorDefecto ).toBe('100');
        
    });
    
    test('Debe de incrementar botón +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('101');
        
    });

    test('Debe de decrementar botón -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('99');
        
    });

    test('Debe de colocar el valor por defecto con el boton reset', () => {

        const wrapper = shallow(
            <CounterApp
                value={110}
            />
        );

        // Se suma 1 para poder resetear y hacer la prueba
        wrapper.find('button').at(0).simulate('click');
        // Se resetea
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('110');
        
    });
    

});



