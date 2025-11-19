import { useState } from "react"
import confetti from "canvas-confetti"
import { TURNS } from "../Constants.js"
import { checkWinnerFrom, checkEndGame, findLowestEmptyIndex } from "../logic/board.js"
import { saveGameToStorage, resetGameStorage } from "../components/storage/index.js"
import { COLS, ROWS } from "../Constants.js"

export const useGameState = () => {
  // Estado del tablero
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(42).fill(null)
  })

  // Estado del turno
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // Estado del ganador
  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = window.localStorage.getItem('winner')
    if (winnerFromStorage) return JSON.parse(winnerFromStorage)
    return null
  })

  const [winnerCombo, setWinnerCombo] = useState(() => {
    const comboFromStorage = window.localStorage.getItem('winnerCombo')
    if (comboFromStorage) return JSON.parse(comboFromStorage)
    return null
  })

  // Función para actualizar el tablero
  const updateBoard = (index) => {
    if (winner !== null) return

    const col = index % COLS
    const lowestIndex = findLowestEmptyIndex(col, board, ROWS, COLS)

    if (lowestIndex === null) return

    const newBoard = [...board]
    newBoard[lowestIndex] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const winnerResult = checkWinnerFrom(newBoard)
    if (winnerResult) {
      confetti()
      setWinner(winnerResult.winner)
      setWinnerCombo(winnerResult.combo)
      
      saveGameToStorage({
        board: newBoard,
        turn: newTurn,
        winner: winnerResult.winner,
        winnerCombo: winnerResult.combo
      })
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
      
      saveGameToStorage({
        board: newBoard,
        turn: newTurn,
        winner: false,
        winnerCombo: null
      })
    } else {
      saveGameToStorage({
        board: newBoard,
        turn: newTurn,
        winner: null,
        winnerCombo: null
      })
    }
  }

  // Función para resetear el juego
  const resetGame = () => {
    setBoard(Array(42).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    setWinnerCombo(null)
    resetGameStorage()
  }

  return {
    board,
    turn,
    winner,
    winnerCombo,
    updateBoard,
    resetGame
  }
}