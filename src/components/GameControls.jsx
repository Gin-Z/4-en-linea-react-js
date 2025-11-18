export const GameControls = ({ onReset, onShowRules }) => {
  return (
    <div>
      <button onClick={onReset}>Reset del juego</button>
      <button onClick={onShowRules}>Reglas del juego</button>
    </div>
  )
}