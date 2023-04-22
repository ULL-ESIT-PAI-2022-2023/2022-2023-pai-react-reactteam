/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Quintana García, Adal Díaz Fariña
 * @since Apr 22, 2023.
 * @description We create a component to define a single Square.
 * @example
 * ```typescript
 * 
 *export default function Square() {
 *  return <button className="square">1</button>;
 *}
 * 
 * ``` 
 *  But if we do it like that we are going to see a '1' in all the Squares.
 *  So, we do like below to fix it.
 */

/**
 * @description We create an interface with the properties of the square component.
 */
interface SquareProps {
  value: string
}

/**
 * @description We create the component.
 * We assign the type of properties that a square component needs as parameter. Those are called 'props'.
 * And to add the text inside the square we cant only write 'value' into the button, you have to write '{value}' to get the 
 *   variable content. Otherwise you will se the literal 'value' string inside the button.
 * @param prop The Square prop used to pass a value.
 * @returns The JSX Element that represent a Square.
 */
export default function Square({ value }: SquareProps): JSX.Element {
    return <button className="square">{value}</button>;
}