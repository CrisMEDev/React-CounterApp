
// El nombre del test debe describir que es lo que estamos probando
test( 'debe de ser true', () => {

    const isActive = false;

    if (!isActive){
        throw new Error('No está activo');
    }

})
