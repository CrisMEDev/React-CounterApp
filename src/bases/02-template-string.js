

const nombre = 'Cristian';
const apellido = 'Morales';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre}
${apellido}
`;

export function getSaludo( nombre = 'Aurora' ){
    return `Hola, ${nombre}`;
}

// console.log( nombreCompleto );



