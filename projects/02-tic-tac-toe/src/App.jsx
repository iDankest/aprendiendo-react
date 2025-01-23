import { useState } from 'react';

// Constante que define los turnos posibles del juego
const TURNS = {
  X: 'X',
  O: 'O',
};

// Componente Square: Representa cada casilla del tablero
// Recibe: children (contenido), isSelected (si está seleccionado), updateBoard (función para actualizar), index (posición)
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  // Estado para el tablero: array de 9 posiciones inicialmente vacías (null)
  const [board, setBoard] = useState(Array(9).fill(null));
  // Estado para controlar de quién es el turno actual
  const [turn, setTurn] = useState(TURNS.X);

  // Función que se ejecuta al hacer click en una casilla
  const updateBoard = (index) => {
    // Crea una copia del tablero actual
    const newBoard = [...board];
    // Coloca la marca del jugador actual en la posición seleccionada
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambia el turno al siguiente jugador
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      {/* Sección del tablero de juego */}
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {_}
            </Square>
          );
        })}
      </section>
      {/* Sección que muestra de quién es el turno actual */}
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
