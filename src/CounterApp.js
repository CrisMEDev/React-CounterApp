
import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    // handleAdd
    const handleAdd = ( event ) => {
        console.log(event);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ value }</h2>

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
