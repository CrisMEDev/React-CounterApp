import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'Spect'
        };

        const user = getUser();

        expect( user ).toEqual( userTest );

    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombre = 'Cristian';

        const getActivo = getUsuarioActivo( nombre );

        expect( getActivo ).toEqual( { uid: 'ABC567', username: nombre } );

    })
    
    

});



