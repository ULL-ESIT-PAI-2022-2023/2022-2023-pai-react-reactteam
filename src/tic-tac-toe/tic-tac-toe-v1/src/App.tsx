/*
  File that create a component.
    A component in React is a reusable piece of code that represent a part of a user interface.
    They are used to represent, manage and update the elements from a user interface.
*/

/*
  We define a component called Square.
    Adding the 'default' keyword we are defining this component as the main component in the file.
    It returns a JSX element.
      A JSK element is a combination between JavaScript code and HTML tags.
    The prop className="square" is a button property that tells CSS how to style the button.
*/
export default function Square() {
  return <button className="square">X</button>;
}