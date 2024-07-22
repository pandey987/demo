import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Form from './Form'
import CommentsForm from './CommentsFrom'
import Joker from './Joker'

function App() {
  const [count, setCount] = useState(0);
  let winCondition= (n) =>{
    return n === 15;
  }

  return (
    <>
      {/* <Joker/> */}
      {/* <Form/> */}
      <TodoList/>
    </>
  )
}

export default App
