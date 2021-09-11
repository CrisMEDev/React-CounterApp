
const personajes = ['Goku', 'Vegeta', 'Gohan'];

const [ , vegeta ] = personajes;


export const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();

const devolverArray = (valor) => {

    return [ valor, () => { console.log('Hola mundo'); }];

}

const [ nombre, setNombre ] = devolverArray('Goku');
