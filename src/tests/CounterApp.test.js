import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en el componente CounterApp', () => {
    
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
    
    

});



