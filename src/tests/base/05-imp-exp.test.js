import { getHeroeById, getHeroesByOwner } from "../../bases/05-imp-exp";
import heroes, {owners} from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    
    test('Debe de retornar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( heroe => heroe.id === id );

        expect( heroe ).toEqual( heroeData );

    });

    test('Debe de retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe ( undefined );

    });

    test('Debe retornar una arreglo con los héroes de DC', () => {

        const owner = owners[1];

        const heroesDC = getHeroesByOwner(owner);

        expect( heroesDC ).toEqual( heroes.filter( heroe => heroe.owner === owner ) );
        
    });

    test('Debe retornar un arreglo con los heroes de Marvel', () => {

        const owner = owners[0];

        const heroesMarvel = getHeroesByOwner(owner).length;

        expect( heroesMarvel ).toBe( 2 );
        
    })
    
    
    

});


