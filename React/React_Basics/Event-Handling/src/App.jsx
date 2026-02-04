import { useState } from 'react'
import './App.css'
import Button from './components/Button'


function App()
{

  function lekhachangehocche(e)
  {
    console.log(e.target.value)
  }
  const buttonTip= (e) => {
    e.preventDefault();
    alert("Submit korte mon chay?")
  }

  return (
    <div>
      <form>
        <input type="text" onChange={lekhachangehocche} />
        <button onClick={buttonTip}>Submit</button>
      </form>
    </div>
  )
}


// function App() {
//   const [count, setCount] = useState(0)

//   function buttonOnClick(){
//     alert("Click kar liya bc?");
//   }
//   const MouseOnHover = () =>{
//     alert('bara bari koris na masud!!!')
//   }
//   return (
//     <div>
//       <p onMouseOver={MouseOnHover}>I am Upper than button</p>
//       <Button onClick = {buttonOnClick}></Button>
//     </div>
//   )
// }

export default App
