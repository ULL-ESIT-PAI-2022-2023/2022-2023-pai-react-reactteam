/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Quintana García, Adal Díaz Fariña
 * @since Apr 22, 2023.
 * @description File that create a component.
 *  A component in React is a reusable piece of code that represent a part of a user interface.
 *  They are used to represent, manage and update the elements from a user interface.
 */

/**
 * @description We define a component called Square.
 *  Adding the 'default' keyword we are defining this component as the main component in the file.
 *  It returns a JSX element.
 *    A JSX element is a combination between JavaScript code and HTML tags.
 *  The prop className="square" is a button property that tells CSS how to style the button.
 * @returns The component as JSX element.
 */
export default function Square(): JSX.Element {
  return <button className="square">X</button>;
}