import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Mens from './components/Mens'
import Womens from './components/Womens'
import Kids from './components/Kids'
import Login from './components/Login'
import Addtocart from './components/Addtocart'
import { BrowserRouter,Routes,Route } from 'react-router'
const App = () => {
  return (
    <>

    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element= {<Home></Home>}></Route>
        <Route path='/mens' element= {<Mens></Mens>}></Route>
        <Route path='/womens' element= {<Womens></Womens>}></Route>
        <Route path='/kids' element= {<Kids></Kids>}></Route>
        <Route path='/add' element= {<Addtocart></Addtocart>}></Route>
        <Route path='/login' element= {<Login></Login>}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
