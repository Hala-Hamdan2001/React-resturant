import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Resturant from './components/resturant/Resturant'
import Home from './components/home/Home'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/resturant' element={<Resturant/>}/>
    </Routes>
    </>
  )
}
export default App
