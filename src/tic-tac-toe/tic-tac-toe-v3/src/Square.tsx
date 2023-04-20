/*
  We create a component to define a single Square.

  export default function Square() {
    return <button className="square">1</button>;
  }

  But if we do it like that we are going to see a '1' in all the Squares.
  So, to fix it: 
*/

//  We create an interface with the properties of the square component.
interface SquareProps {
    value: string
}

/*  
  We create the component.
  We assign the type of properties that a square component needs as parameter. Those are called 'props'.
  And to add the text inside the square we cant only write 'value' into the button, you have to write '{value}' to get the 
    variable content. Otherwise you will se the literal 'value' string inside the button.
*/
export default function Square({ value }: SquareProps) {
    return <button className="square">{value}</button>;
}