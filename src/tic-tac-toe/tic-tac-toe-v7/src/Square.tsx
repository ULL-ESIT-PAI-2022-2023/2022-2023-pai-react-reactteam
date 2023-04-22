/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Quintana García, Adal Díaz Fariña
 * @since Apr 22, 2023.
 * @description We create a component to define a single Square.
 */

/**
 * @description We create an interface with the properties of the square component.
 * The second one is a callback function that will be executed when the button event onClick gets called.
 */
interface SquareProps {
  value: string,
  onSquareClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

/**
 * @description We pass as arguments the properties.
 * In this case the value inside the button and the callback function passed to onClick.
 * @param prop The value inside the button and the callback function passed to onClick.
 * @returns The JSX Element that represent a Square.
 */
export default function Square({ value, onSquareClick }: SquareProps): JSX.Element {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}