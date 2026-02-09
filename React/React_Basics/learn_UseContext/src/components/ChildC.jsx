import React from 'react'
import { useContext } from 'react';

import { UserContext, themeContext } from '../App'

const ChildC = () => {
    const User = useContext(UserContext);
    const {theme, setTheme} = useContext(themeContext);
    function changetheme(){
        if(theme === 'light')
        {
            setTheme('dark')
        }
        else
        {
            setTheme('light');
        }
    }
  return (
    <div>
        <button onClick={changetheme}> Change theme</button>
        Data: {User.name}
    </div>
  )
}

export default ChildC
