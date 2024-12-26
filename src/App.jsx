import { useState } from 'react'
import './App.css'
import TicTacToe from './TicTacToe'
import TicBoard from './TicBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TicTacToe />
      <TicBoard/>
    </>
  )
}

export default App
