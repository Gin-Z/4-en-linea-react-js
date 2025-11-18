import { Square } from "./Square.jsx"

export function WinnerModal({winner}){
    if (winner === null) return null
    
    const winnerText = winner === false ? 'Empate' : 'Ganó: '
    
    return(
        <section className="winner-banner">
          <h2>{winnerText}</h2>
          {winner && <Square>{winner}</Square>}
        </section>
    )
}