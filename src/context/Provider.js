// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({children}) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  })

  const [signal, setSignal] = useState({
    color: 'red',
  })


  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    })
  }

  const changeSignal = (signalColor) => {
    setSignal({
      color: signalColor,
    })
  }

  const context = { cars, signal, moveCar, changeSignal }

  return (
    <CarsContext.Provider value={context}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
