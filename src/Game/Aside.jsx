import { useState, useRef } from "react"


const Aside = ({score, size, started, onSelect, onCustomSelect, startGame,stopGame}) => {

    const [showCustom, setShowCustom] = useState(false)
   
    const selectRef = useRef()
    const selectLengthRef = useRef()
    const selectWidthRef = useRef()

  return (
    <aside className='aside'>
        <div>Score: {score}</div>
        <select ref={selectRef} onChange={() => onSelect(Number(selectRef.current.value))} defaultValue={String(size[0])}>
          <option value='2'>2 - easy</option>
          <option value='4'>4 - normal</option>
          <option value='6'>6 - very hard</option>
          <option value='8'>8 - impossible</option>
        </select>
        <button onClick={() => setShowCustom((prev => !prev))}>Custom</button>

        {showCustom && 
        <form>
            <input ref={selectLengthRef} type="text"/>
            <input ref={selectWidthRef} type="text" />
        </form>
        }


        <button onClick={() => started ? stopGame() : startGame(size)}>{started ? "Stop Game" :  "Start Game"}</button>
      </aside>
  )
}

export default Aside