import { useState } from 'react'
import '../components/Card'
import './App.css'
import Card from '../components/Card'
import Button from '../components/Button'

function App() {
  const [count, setCount] = useState(0)

  function handleClick()
  {
    setCount(count+1);
  }
  return (
   <div>
    
    <Button incrementF = {handleClick}
    text = "Click me">
      <h1>{count}</h1>
     </Button>

    {/* <Card name = "Sabyasachi Roy Barman">
    <h1>Best Person I know</h1>
    <p>Trying to be consistent with this</p>
    <p>Will complete the course as soon as possible</p>
    </Card>

    <Card children="I am a Children">
        kire vatija ki obostha tr
    </Card> */}
    
   </div>
  )
}

export default App
