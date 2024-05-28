import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/Users/About'
import Contact from './Pages/Users/Contact'
import Users from './Pages/Users/Users'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
                <Navbar/>
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path='/About' element={<About/>}></Route>
                  <Route path='/Contact' element={<Contact/>}></Route>
                  <Route path='/Users' element={<Users/>}></Route>                
                </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  )
}

export default App
