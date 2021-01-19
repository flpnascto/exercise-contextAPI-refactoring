import React, { Component } from 'react';
import Context from './Context';
import PropTypes from 'prop-types';

class Provider extends Component {
  constructor(props) {
    super(props);

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red'
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

  changeSignal(payload) {
    this.setState({
      signal: {
        ...this.state.signal,
        color: payload,
      }
    })
  }
  

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
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
  children: PropTypes.node.isRequired,
};


export default Provider;