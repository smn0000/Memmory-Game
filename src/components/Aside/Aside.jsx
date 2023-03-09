import { useState, useRef } from "react"
import './styles.scss'


const Aside = ({score, size, started, setSize, startGame, stopGame}) => {

    const [showCustom, setShowCustom] = useState(false)
    const [selectedCustom, setSelectedCustom] = useState(false)
  
   
    const selectRef = useRef()
    const selectHeightRef = useRef()
    const selectWidthRef = useRef()

    const handleSelect = (value)=>{
      stopGame()
      if(value==='customSelect'){
        setShowCustom(true)
      }
      else{
        setSelectedCustom(false)
        setShowCustom(false)
        setSize([value,value])
      }

    }

    const handleCustomSelect = (width, height)=>{
      if(validateSize(width,height)){
        setSize([width,height])
        setShowCustom(false)
        setSelectedCustom(true)
      }
    }

    const validateSize = (width,height)=>{
      if(width > 0 && height > 0 && width <= 8 && height <=8){
        if((width*height)%2==0) return true
        else{
          alert("Number of cells must be even")
          return false
        }
      }
      else {
        alert("height or width can't be bigger than 8")
        return false;
      }

    }

  return (
    <aside>
        <h1>Score: {score}</h1>
        { !showCustom && 
          <select ref={selectRef} onChange={() => handleSelect(selectRef.current.value)} defaultValue={selectedCustom ? 'custom' : String(size[0])}>
            <option value='custom' hidden={!selectedCustom && 'hidden'}>Custom: {size[0]} x {size[1]}</option>
            <option value='2'>2 - easy</option>
            <option value='4'>4 - normal</option>
            <option value='6'>6 - very hard</option>
            <option value='8'>8 - impossible</option>
            <option value='customSelect'>Custom</option>
          </select>
        }
        
       

        {showCustom && 
          <div className="custom">
            <div className="input-wrapper">
              <input id="height" ref={selectWidthRef} type="text" />
              <span>x</span>
              <input id="width" ref={selectHeightRef} type="text"/>
            </div>
           
            <button onClick={() => handleCustomSelect(Number(selectWidthRef.current.value), Number(selectHeightRef.current.value))}>OK</button>
          </div>
        }


        {!showCustom && <button onClick={() => started ? stopGame() : startGame(size)}>{started ? "Stop Game" : "Start Game"}</button>}
    </aside>
  )
}

export default Aside