interface SquareProps {
  value: string,
  onSquareClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}