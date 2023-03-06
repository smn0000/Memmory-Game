import { useState, useRef } from "react"


const Aside = ({score, size, started, setSize, startGame, stopGame}) => {

    const [showCustom, setShowCustom] = useState(false)
    const [selectedCustom, setSelectedCustom] = useState(false)
  
   
    const selectRef = useRef()
    const selectLengthRef = useRef()
    const selectWidthRef = useRef()

    const handleSelect = (value)=>{
      stopGame()
      setSelectedCustom(false)
      setShowCustom(false)
      setSize([value,value])
    }

    const handleCustomSelect = (width, length)=>{
      stopGame()
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
    <aside className='aside'>
        <div>Score: {score}</div>
        { !showCustom && <>
          <select ref={selectRef} onChange={() => handleSelect(Number(selectRef.current.value))} defaultValue={selectedCustom ? 'custom' : String(size[0])}>
          <option value='custom' hidden={!selectedCustom && 'hidden'}>Custom</option>
          <option value='2'>2 - easy</option>
          <option value='4'>4 - normal</option>
          <option value='6'>6 - very hard</option>
          <option value='8'>8 - impossible</option>
        </select>
        <button onClick={() => setShowCustom((prev => !prev))}>Custom</button>
         </>
        }
        
       

        {showCustom && <>
          <label htmlFor="width">Width</label>
          <input id="width" ref={selectLengthRef} type="text"/>
          <label htmlFor="length">Length</label>
          <input id="length" ref={selectWidthRef} type="text" />
          <button onClick={() => handleCustomSelect(Number(selectWidthRef.current.value), Number(selectLengthRef.current.value))}>OK</button>
          </>
        }


        {!showCustom && <button onClick={() => started ? stopGame() : startGame(size)}>{started ? "Stop Game" : "Start Game"}</button>}
      </aside>
  )
}

export default Aside