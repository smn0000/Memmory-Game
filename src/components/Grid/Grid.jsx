import './styles.scss'

const svgs = [new URL('../../svgs/bat.svg',import.meta.url).href,
    new URL('../../svgs/beetle.svg',import.meta.url).href,
    new URL('../../svgs/butterfly.svg',import.meta.url).href,
    new URL('../../svgs/camel.svg',import.meta.url).href,
    new URL('../../svgs/cat.svg',import.meta.url).href,
    new URL('../../svgs/chameleon.svg',import.meta.url).href,
    new URL('../../svgs/cow.svg',import.meta.url).href,
    new URL('../../svgs/crab.svg',import.meta.url).href,
    new URL('../../svgs/crocodile.svg',import.meta.url).href,
    new URL('../../svgs/dog.svg',import.meta.url).href,
    new URL('../../svgs/duck.svg',import.meta.url).href,
    new URL('../../svgs/elk.svg',import.meta.url).href,
    new URL('../../svgs/frog.svg',import.meta.url).href,
    new URL('../../svgs/giraffe.svg',import.meta.url).href,
    new URL('../../svgs/hippo.svg',import.meta.url).href,
    new URL('../../svgs/husky.svg',import.meta.url).href,
    new URL('../../svgs/kangaroo.svg',import.meta.url).href,
    new URL('../../svgs/lion.svg',import.meta.url).href,
    new URL('../../svgs/mancaw.svg',import.meta.url).href,
    new URL('../../svgs/mantee.svg',import.meta.url).href,
    new URL('../../svgs/mianyag.svg',import.meta.url).href,
    new URL('../../svgs/mouse.svg',import.meta.url).href,
    new URL('../../svgs/ostrich.svg',import.meta.url).href,
    new URL('../../svgs/owl.svg',import.meta.url).href,
    new URL('../../svgs/penguin.svg',import.meta.url).href,
    new URL('../../svgs/racoon.svg',import.meta.url).href,
    new URL('../../svgs/rooster.svg',import.meta.url).href,
    new URL('../../svgs/searay.svg',import.meta.url).href,
    new URL('../../svgs/shark.svg',import.meta.url).href,
    new URL('../../svgs/tiger.svg',import.meta.url).href,
    new URL('../../svgs/toucan.svg',import.meta.url).href,
    new URL('../../svgs/whale.svg',import.meta.url).href,
  ]

const Grid = ({grid, size , onFlip}) => {

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