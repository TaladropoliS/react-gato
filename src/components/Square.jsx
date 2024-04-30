// eslint-disable-next-line react/prop-types
export const Square = ({children, isSelected, updateBoard, index}) => {
    const className = `px-1 py-4 border rounded ${isSelected ? 'bg-dark border-primary text-primary fw-bold' : ''}`
    const handleClick = () => {
        updateBoard(index)
    }
    return (
        <div className='col'>
            <div onClick={handleClick} className={className}>
                {children}
            </div>
        </div>
    )
}