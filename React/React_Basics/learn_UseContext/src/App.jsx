import { createContext, useState } from 'react'

import './App.css'
import ChildA from './components/ChildA'
const UserContext = createContext();
const themeContext = createContext();


function App() {
  const [user, setValue] = useState({name:"Sabyasachi"})
  const [theme, setTheme] = useState('light');
  
  return (
    <div className='box' style={{backgroundColor: theme ==='light'? 'beige': 'black'}}>
      <UserContext.Provider value={user}>
        <themeContext.Provider value = {{theme, setTheme}}>
          <ChildA/>
        </themeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}
export {themeContext}