import { getHeroeById, getHeroesByOwner } from '../bases/05-imp-exp';


// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {

//         try {
//             const heroe = getHeroeById(2);
//             resolve(heroe);
//         } catch (error) {
//             reject('No se pudo encontrar el heroe');
//         }


//     }, 2000);

// });

// promesa.then( (heroe) => {
//     console.log('then de la promesa');
//     console.log('heroe: ', heroe);
// }).catch( err => console.log);  // Imprime el error si lo hay, que viene del reject

const getHeroeByIdAsync = async( id ) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {

            try {
                const heroe = getHeroeById( id );
                
                heroe ? resolve(heroe) : reject('No se pudo encontrar el heroe');
                
            } catch (error) {
                reject('No se pudo encontrar el heroe');
            }


        }, 2000);

    });
}

getHeroeByIdAsync(3).then( console.log ).catch( console.log );
getHeroeByIdAsync(1).then( console.log ).catch( console.log );
getHeroeByIdAsync(10).then( console.log ).catch( console.log );

