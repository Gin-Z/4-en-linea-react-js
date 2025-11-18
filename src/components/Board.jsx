import { Square } from "./Square.jsx"

export const Board = ({ board, updateBoard, winnerCombo }) => {
  return (
    <section className="game">
      {board.map((_, index) => {
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
      })}
    </section>
  )
}