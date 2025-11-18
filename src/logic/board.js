import { WINNER_COMBOS, ROWS, COLS } from "../Constants"

export const checkWinnerFrom=(boardToCheck)=>{
    //revisamos todas las combinaciones ganadoras
    for (const combo of WINNER_COMBOS){
      const [a,b,c,d]=combo
      if(
        boardToCheck[a] &&
        boardToCheck[a]===boardToCheck[b] &&
        boardToCheck[a]===boardToCheck[c] &&
        boardToCheck[a]===boardToCheck[d]
      ){
        // Devolvemos un objeto con el ganador y la combinación
        return {
          winner: boardToCheck[a],
          combo: combo
        }
      }
    }
    //si no hay ganador
    return null
  }
  
export const checkEndGame = (newBoard) =>{
    //revisa si no hay un empate. revisa si hay espacios vacíos en el tablero
    return newBoard.every((square)=>square!==null)
  }


export const findLowestEmptyIndex = (col, board, ROWS, COLS) => {
  let row = ROWS - 1;
  while (row>=0){
    const index = row * COLS + col;
    if (!board[index]) {
      return index; // devolvemos el índice lineal
    }
    row--;
  }
  return null; // columna llena
};
