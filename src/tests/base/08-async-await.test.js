import { getImagen } from "../../bases/08-async-await"

describe('Pruebas con async, await y fetch', () => {
    
    test('Debe de retornar el url de la imagen', async() => {

        const url = await getImagen();

        expect( typeof url ).toBe( 'string' );
        
    })
    

})


