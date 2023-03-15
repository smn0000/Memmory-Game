import {useState, useEffect, useRef} from 'react'
import Aside from '../Aside/Aside'
import Gameover from '../Gameover/Gameover'
import Grid from '../Grid/Grid'
import './styles.scss'

const game = () => {

    const [grid, setGrid] = useState([])
    const [size, setSize] = useState([4,4])
    const [score, setScore] = useState(0)
    const [started, setStarted] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const gameWindowRef = useRef()
   
    const FLIP_SPEED = 500 //Delay between flip
    const BASE_TIME = 1000  // Base time to remember the layout

    let timeouts = []

    const startGame = (size) =>{
      timeouts.forEach(timeout => clearTimeout(timeout))
      setScore(0)
      setGameOver(false)
      initializeGame(size);
      setStarted(true)
      
    }

    const stopGame = () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
      setStarted(false)
      setGrid([])
    }

    useEffect(()=>{  
        timeouts.push(setTimeout(() => {
          if(grid.length > 0) {
            let temp = grid.slice()
            temp.forEach(element => element.flip())
            setGrid(temp)
          }
        },BASE_TIME * size[0]*size[1]/2)) /*Gives more time based on grid size, t = BASE_TIME * width * hieght/ 2 */
      
    },[started])


    const initializeGame = (size) =>{
      let images = createImages(size)
      let gridCells = [size[0]*size[1]]

      for (let i = 0; i < size[0]*size[1]; i++) {
          gridCells[i] = {
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
          gridCells[i].image = images[rand]
          images.splice(rand,1)
        }
        
      setGrid(gridCells)
    }

    const createImages = (size) => {
      //Creates an array of all 32 possible images
      //Images are represented as numbers
      const images = []
      for(let i = 0; i < 32; i++){
        images[i] = i+1
      }
      shuffleArray(images)
      let arr = []
      let imagesToCreate = size[0]*size[1]/2;

      for (let i = 0; i < imagesToCreate; i++) {
       arr.push(images[i],images[i])
      }
      return arr
    }

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
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
        timeouts.push(setTimeout(()=> {
            temp[firstCell.id].setGuessed()
            temp[secondCell.id].setGuessed() 
            setGrid(temp)
            gameWindowRef.current.classList.toggle('prevent-click')
            checkForGameOver() && handleGameOver()
          },FLIP_SPEED))
      
      }
      //If incorrect
      else{
        setScore(current => current-1)
        timeouts.push(setTimeout(()=> {
            temp[firstCell.id].flip()
            temp[secondCell.id].flip()
            setGrid(temp)
            gameWindowRef.current.classList.toggle('prevent-click')
        },FLIP_SPEED)) 
        
      }
      
    } 

    const checkForGameOver = () => grid.filter(element => !element.guessed === true).length === 0 ? true : false
    
    const handleGameOver = () =>  {
      timeouts.push(setTimeout( ()=> {
        stopGame()
        setGameOver(true)
      },1000))
     
    }
     


  return (
    <div className='app'>

      <Aside size={size} score={score} started={started} setSize={setSize} startGame={startGame} stopGame={stopGame}/>
      <div className='game' ref={gameWindowRef}>
        <div className='board'>
          {started && <Grid grid={grid} size={size} onFlip={handleFlip}/>}
          {gameOver && <Gameover score={score}/>}
        </div>
      </div>
    </div>
  
  )
}

export default game