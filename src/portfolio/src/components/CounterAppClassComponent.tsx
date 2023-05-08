/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2022-2023
 *
 * @author Adal Díaz Fariña
 * @author Jorge Quintana García
 * @since Apr 23 2023
 * @desc CounterAppClassComponent.tsx
 * Counter as class component in react
 */

import * as React from 'react';

type PropsType = {
  startedValue: number
};

type StateType = {
  value: number
};

export class Counter extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {value : this.props.startedValue};
  }
 
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
 
  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  handleReset = () => {
    this.setState({ value: 0});
  };

  render() {
    return (
      <div className="counter">
        <h1 className="count">{this.state.value}</h1>
 
        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}