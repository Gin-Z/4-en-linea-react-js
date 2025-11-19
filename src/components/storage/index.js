export const saveGameToStorage = ({ board, turn, winner = null, winnerCombo = null }) => {
  // Guardar partida
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
  
  // Guardar estado del ganador
  window.localStorage.setItem('winner', JSON.stringify(winner))
  
  // Guardar combinación ganadora
  window.localStorage.setItem('winnerCombo', JSON.stringify(winnerCombo))
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
  window.localStorage.removeItem('winner')
  window.localStorage.removeItem('winnerCombo')
}