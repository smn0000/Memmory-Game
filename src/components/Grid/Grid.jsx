import * as ICONS from '../../svgs/svgs'
import './styles.scss'
const Grid = ({grid, size , onFlip}) => {
  const getIcon =  (image) =>{
  switch (image) {
    case 1:return <ICONS.Bat/>
    case 2:return <ICONS.Beetle/>
    case 3:return <ICONS.Butterfly/>
    case 4:return <ICONS.Camel/>
    case 5:return <ICONS.Cat/>
    case 6:return <ICONS.Chameleon/>
    case 7:return <ICONS.Crab/>
    case 8:return <ICONS.Crocodile/>
    case 9:return <ICONS.Dog/>
    case 10:return <ICONS.Duck/>
    case 11:return <ICONS.Elk/>
    case 12:return <ICONS.Frog/>
    case 13:return <ICONS.Hippo/>
    case 14:return <ICONS.Husky/>
    case 15:return <ICONS.Kangaroo/>
    case 16:return <ICONS.Lion/>
    case 17:return <ICONS.Manatee/> 
    case 18:return <ICONS.Mancaw/> 
    case 19:return <ICONS.Mianyag/>
    case 20:return <ICONS.Mouse/>
    case 21:return <ICONS.Ostrich/>
    case 22:return <ICONS.Owl/>
    case 23:return <ICONS.Penguin/>
    case 24:return <ICONS.Raccoon/>
    case 25:return <ICONS.Rooster/> 
    case 26:return <ICONS.Searay/> 
    case 27:return <ICONS.Shark/>
    case 28:return <ICONS.Tiger/>
    case 29:return <ICONS.Toucan/>
    case 30:return <ICONS.Whale/>
    case 31:return <ICONS.Cow/>
    case 32:return <ICONS.Giraffe/>
  
    default:
      break;
  }
}

  return (
    <div className="grid" style={{gridTemplateColumns : `repeat(${size[0]},1fr)`, gridTemplateRows : `repeat(${size[1]},1fr)`}}>
        {grid.map( element => (
        <div data-guessed={element.guessed} data-flipped={element.flipped} key={element.id} className="cell" onClick={() => onFlip(element.id)}>
            <div className="front">
              {getIcon(element.image)}
            </div>
            <div className="back"></div>
        </div>
        ))}
    </div>
  )
}

export default Grid