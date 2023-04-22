/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge Quintana García, Adal Díaz Fariña
 * @since Apr 22, 2023.
 * @description Now we need nine of them so if we only copy and paste it like this:
 * @example
 * ```typescript
 * 
 *export default function Square() {
 *  return <button className="square">X</button><button className="square">X</button>;
 *}
 * 
 * ```
 * We will get an error because React components can only return a single JSK element.
 * We have to wrap multiple JSK elements with <> and </> and then return it like this:
 * @example
 * ```typescript
 * 
 *export default function Square() {
 *  return (
 *    <>
 *      <button className="square">X</button>
 *      <button className="square">X</button>
 *    </>
 *  );
 *}
 * 
 * ``` 
 * So, now, you should be able to see two squares. We need nine of them so we copy and paste it.
 * The problem now is that all the squares are in a single row, so we fix it like the code below.
 */

/**
 * @description The only 'rare' thing that we see is the className="board-row" that is a 
 * div prop that tells the style to be added to that container.
 *
 * And we rename the component because it is not a single square any more.
 * @returns The component as JSK element.
 */
export default function Board(): JSX.Element {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}