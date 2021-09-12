
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    // const state = useState(0);
    const [ counter, setCounter ] = useState( value );

    // handleAdd
    const handleAdd = ( event ) => {
        // setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
    }

    const handleReset = ( event ) => {
        setCounter( (c) => c = value );
    }

    const handleSubstract = ( event ) => {
        setCounter( counter - 1 );
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 100
}



export default CounterApp;
