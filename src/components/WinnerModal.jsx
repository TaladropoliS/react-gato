// eslint-disable-next-line react/prop-types
export function WinnerModal({winner, resetGame, turn}) {
    if (winner === null) return (
        <div className={'card text-light bg-dark border border-primary mb-2'}>
            <p className={'text-center m-0 p-0'}>Juega
                <span className={'fw-bold fs-5 text-primary'}>{` ${turn}`}</span></p>
            <div className={'px-5 pb-1'}>
                <button onClick={resetGame} className={'btn btn-sm btn-secondary text-dark py-0'}>reset</button>
            </div>
        </div>
    )
    else return (
        <div className={'card text-light bg-success border border-warning border-3 mb-2'}>
            {winner !== false && (
                <p className={'text-center m-0 p-0 bg-dark'}>
                    *** El GANADOR es <span className={'fw-bold fs-2 text-primary'}>{` ${winner}`}</span> ***
                </p>
            )}
            {winner === false && (
                <p className={'text-center m-0 p-0 bg-dark'}>
                    EMPATE :-(
                </p>
            )}
            <div className={'px-5 pb-1'}>
                <button onClick={resetGame} className={'btn btn-sm btn-light text-dark py-0'}>
                    Volver a jugar
                </button>
            </div>
        </div>
    )
}