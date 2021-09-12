import { getHeroeByIdAsync } from "../../bases/06-promises";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    
    test('getHeroesByIdAsync debe de retornar un héroe async', () => {
        
        const id = 1;

        return getHeroeByIdAsync(id)
            .then( hero => {
                expect( hero ).toBe( heroes[0] );
            });

    });

    test('getHeroesByIdAsync debe obtener un error si el héroe no existe', () => {
        
        const id = 15;

        return getHeroeByIdAsync(id)
            .catch( error => {
                expect( error ).toBe( 'No se pudo encontrar el heroe' );
            });

    })
    

});


