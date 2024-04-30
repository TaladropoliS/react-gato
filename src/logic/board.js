import {WINNER_COMBOS} from "../constans.js";
// Chequea las combinaciones ganadoras en el tablero
export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a]
        }
    }
    return null
}
export const checkEndGame = (newBoard) => {
    return newBoard.every((block) => block !== null)
}