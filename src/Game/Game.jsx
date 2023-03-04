import {useState, useEffect, useRef} from 'react'
import Gameover from './Gameover'
import Grid from './Grid'

const game = () => {

    const [grid, setGrid] = useState([])
    const [size, setSize] = useState(4)
    const [score, setScore] = useState(0)
    const [started, setStarted] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const gameWindowRef = useRef()
    const selectRef = useRef()
    const flipSpeed = 500

    let timeout = []

    const startGame = (size) =>{
      setGameOver(false)
      initializeGame(size);
      setStarted(true)
      
    }

    const stopGame = () => {
      timeout.forEach(timeout => clearTimeout(timeout))
      setStarted(false)
      setScore(0)
      setGrid([])
    }

    useEffect(()=>{  
        timeout.push(setTimeout(() => {
          if(grid.length > 0) {
            let temp = grid.slice()
            temp.forEach(element => element.flip())
            setGrid(temp)
          }
        },2000*size))
      
    },[started])

    const handleSelect = () => {
      stopGame()
      setSize(Number(selectRef.current.value))

    }


    const initializeGame = (size) =>{
      let images = createImages(size)
      let grid = [size*size]
      for (let i = 0; i < size*size; i++) {
          grid[i] = {
              id: i,
              image: null,
              flipped: false,
              guessed: false,
              flip: function() {this.flipped = !this.flipped},
              setGuessed: function() {
                this.guessed = !this.guessed
                {this.flipped = !this.flipped}
              },
          }

          //Populates grid.image with random numbers

          let rand = Math.floor(Math.random() * images.length)
          grid[i].image = images[rand]
          images.splice(rand,1)
        }

      setGrid(grid)
    }

    const createImages = (size) => {
      let arr = []

      for (let i = 1; i <= size*size/2; i++) {
        arr.push(i,i)
      }
      return arr
    }



    const handleFlip = (id)=>{
      // Flip the cell
      const temp = grid.slice()
      temp[id].flip()
      setGrid(temp)

      // Check if 2 cells are flipped
      const flippedCells = grid.filter(element => element.flipped === false)
      flippedCells.length === 2 && handleGuess(flippedCells[0],flippedCells[1]) 
    }
    
    const handleGuess = (firstCell, secondCell) => {
      gameWindowRef.current.classList.toggle('prevent-click')
      const temp = grid.slice()
      
      //If correct
      if(firstCell.image == secondCell.image){ 
        setScore(current => current+1)
        timeout.push(setTimeout(()=> {
            temp[firstCell.id].setGuessed()
            temp[secondCell.id].setGuessed() 
            setGrid(temp)
            gameWindowRef.current.classList.toggle('prevent-click')
            checkForGameOver() && handleGameOver()
          },flipSpeed))
      
      }
      //If incorrect
      else{
        setScore(current => current-1)
        timeout.push(setTimeout(()=> {
            temp[firstCell.id].flip()
            temp[secondCell.id].flip()
            setGrid(temp)
            gameWindowRef.current.classList.toggle('prevent-click')
        },flipSpeed)) 
        
      }
      
    } 

    const checkForGameOver = () => grid.filter(element => !element.guessed === true).length === 0 ? true : false
    
    const handleGameOver = () =>  timeout.push(setTimeout( ()=> {setGameOver(true) },1000))
     


  return (
    <>
      <aside className='aside'>
        <div>Score: {score}</div>
        <select ref={selectRef} onChange={handleSelect} defaultValue={String(size)}>
          <option value='2'>2 - easy</option>
          <option value='4'>4 - normal</option>
          <option value='6'>6 - very hard</option>
          <option value='8'>8 - impossible</option>
        </select>
        <button onClick={() => started ? stopGame() : startGame(size)}>{started ? "Stop Game" :  "Start Game"}</button>
      </aside>
    
      <div className='game' ref={gameWindowRef}>
        <div className='board'>
          {gameOver ? <Gameover/> :<Grid grid={grid} size={size} onFlip={handleFlip}/>}
        </div>
      </div>
    </>
  
  )
}

export default game