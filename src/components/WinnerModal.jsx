import { Square } from "./Square.jsx"
import { useEffect, useRef } from "react"

export function WinnerModal({winner}){
    const h2Ref = useRef(null)

    useEffect(() => {
    if (winner !== null && h2Ref.current) {
      h2Ref.current.tabIndex = -1   // permite enfocar un h2
      h2Ref.current.focus() //Hace focus a H2 cuando hay un ganador o un empate
      h2Ref.current.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [winner])

    if (winner === null) return null
    
    const winnerText = winner === false ? 'Empate' : 'Ganó: '
    
    return(
        <section className="winner-banner">
          <h2 ref={h2Ref}>{winnerText}</h2>
          {winner && <Square>{winner}</Square>}
        </section>
    )
}