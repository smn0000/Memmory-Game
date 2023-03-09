import './styles.scss'
const Grid = ({grid, size , onFlip}) => {
  const svgs = ['src/svgs/bat.svg','src/svgs/beetle.svg','src/svgs/butterfly.svg','src/svgs/camel.svg','src/svgs/cat.svg','src/svgs/chameleon.svg','src/svgs/cow.svg','src/svgs/crab.svg','src/svgs/crocodile.svg','src/svgs/dog.svg','src/svgs/duck.svg','src/svgs/elk.svg','src/svgs/frog.svg','src/svgs/giraffe.svg','src/svgs/hippo.svg','src/svgs/husky.svg','src/svgs/kangaroo.svg','src/svgs/lion.svg','src/svgs/mancaw.svg','src/svgs/mantee.svg','src/svgs/mianyag.svg','src/svgs/mouse.svg','src/svgs/ostrich.svg','src/svgs/owl.svg','src/svgs/penguin.svg','src/svgs/racoon.svg','src/svgs/rooster.svg','src/svgs/searay.svg','src/svgs/shark.svg','src/svgs/tiger.svg','src/svgs/toucan.svg','src/svgs/whale.svg']

  return (
    <div className="grid-wrapper">
      <div className="grid" style={{gridTemplateColumns : `repeat(${size[0]},1fr)`, gridTemplateRows : `repeat(${size[1]},1fr)`}}>
        {grid.map( element => (
          <div data-guessed={element.guessed} data-flipped={element.flipped} key={element.id} className="cell" onClick={() => onFlip(element.id)}>
              <div className="front" style={{backgroundImage: 'url('+ svgs[element.image-1] +')'}}>
              </div>
              <div className="back"></div>
          </div>
        ))}
      </div>
    </div>
   
   
  )
}

export default Grid