import { useState } from 'react'
import './App.css'
import Loginbtn from './components/Loginbtn'
import Logoutbtn from './components/Logoutbtn'

function App() {
  const [isloggedin, loginstatus] = useState(true);

  if(!isloggedin)
  {
    return(
      <Loginbtn/>
    )
  }
  return(
    <div>
      <h1>
        Welcome to the HomePage!
      </h1>
      {isloggedin && <Logoutbtn/>}
    </div>
  )

  // if (isloggedin) {
  //   return (
  //     <Logoutbtn></Logoutbtn>
  //   )
  // } else {
  //   return (
  //     <Loginbtn></Loginbtn>
  //   )
  // }

  // return(
  //   <div>
  //     {isloggedin? <Logoutbtn/>: <Loginbtn/>}
  //   </div>
  // )
  //ternary operator
}

export default App
