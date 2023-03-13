import './styles.scss'

const Gameover = ({score}) => {
  return (
    <div className='gameover'>
      <p>Gameover</p>
      <p>Score: {score}</p>
      
      </div>
  )
}

export default Gameover