import { useEffect, useState } from "react"

export const Square = ({ children, isSelected, updateBoard, index, isWinnerSquare }) => {
  const [flash, setFlash] = useState(false)
  const [prevChildren, setPrevChildren] = useState(children)

  useEffect(() => {
    // Detectar cuando children cambia de null a un valor
    if (prevChildren === null && children !== null) {
      setFlash(true)
      // Remover la clase después de la animación
      const timer = setTimeout(() => setFlash(false), 500)
      return () => clearTimeout(timer)
    }
    setPrevChildren(children)
  }, [children, prevChildren])

  const className = `square ${isSelected ? 'is-selected' : ''} ${flash ? 'flash' : ''} ${isWinnerSquare ? 'winner-flash' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}