import './styles.scss'
import getBackgroud from './background'

const Grid = ({grid, size , onFlip}) => {

  return (
    <div className="grid-wrapper">
      <div className="grid" style={{gridTemplateColumns : `repeat(${size[0]},1fr)`, gridTemplateRows : `repeat(${size[1]},1fr)`}}>
        {grid.map( element => (
          <div data-guessed={element.guessed} data-flipped={element.flipped} key={element.id} className="cell" onClick={() => onFlip(element.id)}>
              <div className="front" style={{backgroundImage: 'url('+ getBackgroud(element.image-1) +')'}}>
              </div>
              <div className="back"></div>
          </div>
        ))}
      </div>
    </div>
   
   
  )
}

export default Grid