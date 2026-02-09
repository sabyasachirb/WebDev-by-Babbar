import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ParamCom from './components/ParamCom';
import Notfound from './components/Notfound';
import Courses from './components/Courses';
import Mocktest from './components/Mocktest';
import Reports from './components/Reports';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/> 
      <Home/>
      </div>

    },
    {
      path:"/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:
      [
        {
          path: 'courses',
          element:
          <div>
            <Courses/>
          </div>
        },
        {
          path: 'mocktest',
          element:
          <div>
            <Mocktest/>
          </div>
        },
        {
          path: 'reports',
          element:
          <div>
            <Reports/>
          </div>
        }
      ]
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamCom/>
      </div>
    },
    {
      path:"*",
      element: <Notfound/>
    }
  ]
)



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
