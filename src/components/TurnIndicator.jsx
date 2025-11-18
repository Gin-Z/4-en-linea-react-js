import { Square } from "./Square.jsx"
import { TURNS } from "../Constants.js"

export const TurnIndicator = ({ currentTurn }) => {
  return (
    <section className="turn">
      <Square isSelected={currentTurn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={currentTurn === TURNS.O}>{TURNS.O}</Square>
    </section>
  )
}