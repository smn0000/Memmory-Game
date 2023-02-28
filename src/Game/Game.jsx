import {useState, useEffect} from 'react'
import Grid from './Grid'

const game = ({size}) => {

    const [grid, setGrid] = useState([])

    const startGame = (size) =>{
        let grid = [size*size]
        for (let i = 0; i < size*size; i++) {
            grid[i] = {
                id: i,
                image: i,
                flipped: true,
                flip: function() {this.flipped = !flipped}
            }
        }
        return grid
    }
    
    useEffect(() => {
      setGrid(startGame(size))
    
    
    }, [])

    const handleFlip = (id)=>{
      let temp = grid.slice()
      temp[id].flipped = !temp[id].flipped
      setGrid(temp)
    }
    

  return (
    <div className='game'>
        
        <Grid grid={grid} size={size} onFlip={handleFlip}/>

    </div>
  )
}

export default game