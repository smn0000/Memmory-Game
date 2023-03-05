import {useState, useEffect, useRef} from 'react'
import Aside from './Aside'
import Gameover from './Gameover'
import Grid from './Grid'

const game = () => {

    const [grid, setGrid] = useState([])
    const [size, setsize] = useState([4,4])
    const [score, setScore] = useState(0)
    const [started, setStarted] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const gameWindowRef = useRef()
   
    const flipSpeed = 500 //Delay between flip
    const baseTime = 1000  // Base time to remember the layout

    let timeout = []

    const startGame = (size) =>{
      setScore(0)
      setGameOver(false)
      initializeGame(size);
      setStarted(true)
      
    }

    const stopGame = () => {
      timeout.forEach(timeout => clearTimeout(timeout))
      setStarted(false)
      setGrid([])
    }

    useEffect(()=>{  
        timeout.push(setTimeout(() => {
          if(grid.length > 0) {
            let temp = grid.slice()
            temp.forEach(element => element.flip())
            setGrid(temp)
          }
        },baseTime* size[0]*size[1]/2)) /*Gives more time based on grid size, t = baseTime * width * hieght/ 2 */
      
    },[started])

    const handleSelectBoardSize = (size) => {
      stopGame()
      setsize([size,size])
    }

    const handleSelectCustomSize = (width,length) => {
      stopGame()
      setsize([ width, length ])
    }


    const initializeGame = (size) =>{
      let images = createImages(size)
      let grid = [size[0]*size[1]]

      for (let i = 0; i < size[0]*size[1]; i++) {
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

      for (let i = 1; i <= size[0]*size[1]/2; i++) {
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
    
    const handleGameOver = () =>  {
      timeout.push(setTimeout( ()=> {
        stopGame()
        setGameOver(true)
      },1000))
     
    }
     


  return (
    <>
      <Aside size={size} score={score} started={started} onSelect={handleSelectBoardSize} onCustomSelect={handleSelectCustomSize} startGame={startGame} stopGame={stopGame}/>

      <div className='game' ref={gameWindowRef}>
        <div className='board'>
          <Grid grid={grid} size={size} onFlip={handleFlip}/>
          {gameOver && <Gameover score={score}/>}
        </div>
      </div>
    </>
  
  )
}

export default game