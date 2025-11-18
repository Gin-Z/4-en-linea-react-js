import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square.jsx"
import { TURNS, ROWS, COLS } from "./Constants.js"
import { checkWinnerFrom, checkEndGame, findLowestEmptyIndex } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { RulesModal } from "./components/RulesModal.jsx"
import { saveGameToStorage, resetGameStorage } from "./components/storage/index.js"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return (Array(42).fill(null))
  })

  const [winner, setWinner] = useState(null) // null no hay ganador, false es empate
  const [winnerCombo, setWinnerCombo] = useState(null) // índices de la combinación ganadora
  const [showRules, setShowRules] = useState(false) // controla si se muestran las reglas

  const resetGame = () => {
    setBoard(Array(42).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    setWinnerCombo(null)
    resetGameStorage()
  }

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const updateBoard = (index) => {
    // No actualizamos la posición si hay ganador
    if (winner) return
    // Simulo la gravedad del juego. Siempre se va a colocar el nuevo en la fila mas baja y disponible posible.
    const col = index % COLS;
    // Busco el índice vacío más bajo
    const lowestIndex = findLowestEmptyIndex(col, board, ROWS, COLS);

    if (lowestIndex === null) return; // columna llena, no hacemos nada
    
    // actualizar el tablero
    const newBoard = [... board]
    newBoard[lowestIndex] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Guardar partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    // revisar si hay ganador
    const winnerResult = checkWinnerFrom(newBoard)
    if (winnerResult) {
      confetti()
      setWinner(winnerResult.winner)
      setWinnerCombo(winnerResult.combo)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }
  
  return (
    <main className="board">
      <h1>4 en línea</h1>
      <WinnerModal winner={winner}/>
      <button onClick={resetGame}>Reset del juego</button>
      <button onClick={() => setShowRules(true)}>Reglas del juego</button>
      <section className="game">
        {
          board.map((_, index) => {
            const isWinnerSquare = winnerCombo && winnerCombo.includes(index)
            return (
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
                isWinnerSquare={isWinnerSquare}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <RulesModal isOpen={showRules} onClose={() => setShowRules(false)} />
    </main>
  )
}
export default App