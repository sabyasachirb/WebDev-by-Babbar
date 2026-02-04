import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setName] = useState("")
//create current state
//manage current state
//change state
//sob child er moddhe state sync kore daw
  return (
    <div className='div'>
      <Card title="Card1" name={name} setName={setName}></Card>
      <Card title="Card2" name={name} setName={setName}></Card>
      
    </div>
  )
}

export default App
