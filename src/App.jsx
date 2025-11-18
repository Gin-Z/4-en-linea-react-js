import { useState } from "react"
import { useGameState } from "./hooks/useGameState.js"
import { Board } from "./components/Board.jsx"
import { TurnIndicator } from "./components/TurnIndicator.jsx"
import { GameControls } from "./components/GameControls.jsx"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { RulesModal } from "./components/RulesModal.jsx"

function App() {
  const { board, turn, winner, winnerCombo, updateBoard, resetGame } = useGameState()
  const [showRules, setShowRules] = useState(false)

  return (
    <main className="board">
      <h1>4 en línea</h1>
      
      <WinnerModal winner={winner} />
      
      <GameControls 
        onReset={resetGame}
        onShowRules={() => setShowRules(true)}
      />
      
      <Board 
        board={board}
        updateBoard={updateBoard}
        winnerCombo={winnerCombo}
      />
      
      <TurnIndicator currentTurn={turn} />
      
      <RulesModal 
        isOpen={showRules}
        onClose={() => setShowRules(false)}
      />
    </main>
  )
}

export default App