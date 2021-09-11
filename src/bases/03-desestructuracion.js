
// Desestructuración

const persona = {
    nombre: 'Cristian',
    edad: 26,
    clave: '--Leyenda-Spect'
}

const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ( { ...persona } ) => {

    // console.log(nombre);
    // console.log(edad);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 15.235,
            lng: 45.1545
        }
    }
    
}

const {nombreClave, anios, latlng: { lat, lng }} = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
