export function RulesModal({ isOpen, onClose }) {
  if (!isOpen) return null
  
  return (
    <section className="rules-modal-overlay">
      <div className="rules-modal-content">
        <h2>Reglas del juego</h2>
        <div className="rules-text">
          <p><strong>Objetivo:</strong> Conecta 4 fichas de tu color en línea (horizontal, vertical o diagonal) antes que tu oponente.</p>
          
          <p><strong>Cómo jugar:</strong></p>
          <ul>
            <li>Los jugadores se turnan para colocar fichas en el tablero</li>
            <li>Haz clic en cualquier casilla de una columna para soltar tu ficha</li>
            <li>La ficha caerá hasta la posición más baja disponible en esa columna</li>
            <li>El jugador X comienza el juego</li>
          </ul>
          
          <p><strong>Ganar:</strong></p>
          <ul>
            <li>El primer jugador que conecte 4 fichas en línea gana</li>
            <li>Las líneas ganadoras se iluminarán en verde</li>
            <li>Si se llena el tablero sin ganador, es empate</li>
          </ul>
        </div>
        <button onClick={onClose}>Cerrar reglas</button>
      </div>
    </section>
  )
}