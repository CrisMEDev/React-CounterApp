import { getHeroeById, getHeroesByOwner } from './05-imp-exp';

export const getHeroeByIdAsync = async( id ) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {

            try {
                const heroe = getHeroeById( id );
                
                heroe ? resolve(heroe) : reject('No se pudo encontrar al heroe');
                
            } catch (error) {
                reject('No se pudo encontrar al heroe');
            }


        }, 1500);

    });
}


