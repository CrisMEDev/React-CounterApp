
describe('Pruebas en el archivo demo.test.js', () => {

    // El nombre del test debe describir que es lo que estamos probando
    test( 'deben ser iguales los strings', () => {
    
        // 1. Inicialización
        const mensaje = 'Hola mundo';
    
        // 2. Estímulo
        const mensaje2 = `Hola mundo`;
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 ); // Hace la comparación ===
    
    })

});


