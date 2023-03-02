
const Grid = ({grid, size , onFlip}) => {
  return (
    <div className="grid" style={{gridTemplateColumns: `repeat(${size},1fr)`, gridTemplateRows: `repeat(${size},1fr)`}}>
        {grid.map( element => (
        <button data-guessed={element.guessed} data-flipped={element.flipped} key={element.id} className={element.flipped ? "cell flipped" : "cell " } onClick={() => onFlip(element.id)}>
            <div className="front">{element.image}</div>
            <div className="back"></div>
        </button>
        ))}
    </div>
  )
}

export default Grid