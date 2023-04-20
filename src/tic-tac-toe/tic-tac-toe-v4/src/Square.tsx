//  Imported function that remember the state of a variable to be used in the future.
import { useState } from 'react';

// We define a type to the state variable.
type valueType = string | null;

export default function Square() {
  /*
    We want the Square to 'remember' when it was clicked and fill it whit a X.
    To do that we use the useState function. It 'remember' the button state when pressed using a state variable.
    It also give a function to change the value of that state because state variable are inmutables.
  */
  const [value, setValue] = useState(null as valueType);

  //  To make the button do something when clicked we create a function to handle it.
  function handleClick() {
    setValue('X');
  }

  // We give a the function hadleClick as a funtion callback to the button onClick event.
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}