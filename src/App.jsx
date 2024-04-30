import './App.css'
import {useState} from "react";
import confetti from 'canvas-confetti'
import catImage from './assets/img/cat.svg';
import {Square} from "./components/Square";
import {TURNS} from "./constans.js";
import {checkWinnerFrom, checkEndGame} from "./logic/board.js"
import {WinnerModal} from "./components/WinnerModal.jsx";

function App() {

    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem('board')
        return boardFromStorage
            ? JSON.parse(boardFromStorage)
            : Array(9).fill(null)
    })

    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem('turn')
        return turnFromStorage ?? TURNS.X
    })

    const [winner, setWinner] = useState(null)

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
        window.localStorage.removeItem('board')
        window.localStorage.removeItem('turn')
    }

    const updateBoard = (index) => {
        if (board[index] || winner) return // si ya hay un valor en la casilla, no hacer nada y retornar

        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)

        window.localStorage.setItem('board', JSON.stringify(newBoard))
        window.localStorage.setItem('turn', newTurn)

        const newWinner = checkWinnerFrom(newBoard)
        if (newWinner) {
            confetti()
            setWinner(newWinner)
            window.localStorage.removeItem('board')
            window.localStorage.removeItem('turn')
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }
    }

    return (
        <main className={'container-fluid col-sm-7 col-md-5 border border-secondary py-3 rounded'}>
            <div className={'col-3 col-sm-2 col-md-1 mx-auto'}>
                <img className={'cat-image img-fluid pb-3'} src={catImage} alt="gato"/>
            </div>
            <WinnerModal winner={winner} resetGame={resetGame} turn={turn}/>
            <section className={'row row-cols-3 g-0'}>
                {
                    board.map((_, index) => {
                        return (
                            <div key={index} className={`fw-bold text-primary`}>
                                <Square index={index} updateBoard={updateBoard}>
                                    {board[index]}&nbsp;
                                </Square>
                            </div>
                        )
                    })
                }
            </section>
            {/* Indica el turno del que juega X u O*/}
            <section className={'row px-sm-5 pt-1'}>
                <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>
        </main>
    )
}

export default App
