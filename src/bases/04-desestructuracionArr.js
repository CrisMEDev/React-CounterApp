
const personajes = ['Goku', 'Vegeta', 'Gohan'];

const [ , vegeta ] = personajes;

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

console.log(vegeta);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);


const devolverArray = (valor) => {

    return [ valor, () => { console.log('Hola mundo'); }];

}

const [ nombre, setNombre ] = devolverArray('Goku');
console.log(nombre);
setNombre();
