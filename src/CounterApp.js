
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    // const state = useState(0);
    const [ counter, setCounter ] = useState( 0 );

    // handleAdd
    const handleAdd = () => {
        // setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}



export default CounterApp;
