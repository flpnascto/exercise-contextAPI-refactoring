import React, { Component } from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

class Provider extends Component {
  constructor(props) {
    super(props);

    this.moveCar = this.moveCar.bind(this);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    };
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };
  

  render() {
    const context = {
      cars: this.state.cars,
      moveCar: this.moveCar,
    };

    const { children } = this.props;

    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    );
  }
};

Provider.propTypes = {
  carValue: PropTypes.node.isRequired,
};


export default Provider;
