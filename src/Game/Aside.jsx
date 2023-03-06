import { useState, useRef } from "react"


const Aside = ({score, size, started, setSize, startGame, stopGame}) => {

    const [showCustom, setShowCustom] = useState(false)
  
   
    const selectRef = useRef()
    const selectLengthRef = useRef()
    const selectWidthRef = useRef()

    const handleSelect = (value)=>{
      stopGame()
      setShowCustom(false)
      setSize([value,value])
    }

    const handleCustomSelect = (width, length)=>{
      stopGame()
      //TODO VALIDATE WIDTH AND LENGHT
      setSize([width,length])
      setShowCustom(false)
    }

  return (
    <aside className='aside'>
        <div>Score: {score}</div>
        { !showCustom && <>
          <select ref={selectRef} onChange={() => handleSelect(Number(selectRef.current.value))} defaultValue={String(size[0])}>
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