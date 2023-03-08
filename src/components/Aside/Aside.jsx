import { useState, useRef } from "react"
import './styles.scss'


const Aside = ({score, size, started, setSize, startGame, stopGame}) => {

    const [showCustom, setShowCustom] = useState(false)
    const [selectedCustom, setSelectedCustom] = useState(false)
  
   
    const selectRef = useRef()
    const selectLengthRef = useRef()
    const selectWidthRef = useRef()

    const handleSelect = (value)=>{
      stopGame()
      console.log(value)
      if(value==='custom'){
        setShowCustom(true)
      }
      else{
        setSelectedCustom(false)
        setShowCustom(false)
        setSize([value,value])
      }

    }

    const handleCustomSelect = (width, length)=>{
      if(validateSize(width,length)){
        setSize([width,length])
        setShowCustom(false)
        setSelectedCustom(true)
      }
    }

    const validateSize = (width,length)=>{
      if(width > 0 && length > 0 && width <= 8 && length <=8){
        if((width*length)%2==0) return true
        else{
          alert("Number of cells must be even")
          return false
        }
      }
      else {
        alert("Length or width can't be bigger than 8")
        return false;
      }

    }

  return (
    <aside>
        <div>{started && <>Score: {score}</>}</div>
        { !showCustom && 
        <div>
          <select ref={selectRef} onChange={() => handleSelect(selectRef.current.value)} defaultValue={selectedCustom ? 'custom' : String(size[0])}>
            <option value='2'>2 - easy</option>
            <option value='4'>4 - normal</option>
            <option value='6'>6 - very hard</option>
            <option value='8'>8 - impossible</option>
            <option value='custom'>Custom</option>
          </select>
         </div>}
        
       

        {showCustom && 
          <div>
            <label htmlFor="width">Width</label>
            <input id="width" ref={selectLengthRef} type="text"/>
            <label htmlFor="length">Length</label>
            <input id="length" ref={selectWidthRef} type="text" />
            <button onClick={() => handleCustomSelect(Number(selectWidthRef.current.value), Number(selectLengthRef.current.value))}>OK</button>
          </div>
        }


        {!showCustom && <button onClick={() => started ? stopGame() : startGame(size)}>{started ? "Stop Game" : "Start Game"}</button>}
    </aside>
  )
}

export default Aside