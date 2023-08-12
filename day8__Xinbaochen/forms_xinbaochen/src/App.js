import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/about'
import Home from './components/home'
import Contact from './components/contact'
import Form from './components/Form'
import NavBar from './components/navbar'

const App = function(){
    return(
        <div className='App'>
           <BrowserRouter>
            <Routes>
                {/* nested route */}
              <Route path='/' element={<NavBar/>}>
                <Route index element ={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/form' element={<Form/>} /> 
              </Route>
            </Routes>
           </BrowserRouter>
        </div>
    )
}

export default App