//  We create an interface with the properties of the square component.
//  The second one is a callback function that will be executed when the button event onClick gets called.
interface SquareProps {
  value: string,
  onSquareClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

//  We pass as arguments the properties.
//  In this case the value inside the button and the callback function passed to onClick.
export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}