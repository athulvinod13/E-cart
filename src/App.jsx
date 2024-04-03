import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header' 
import Whishlist from './Pages/Whishlist'
import Cart from './Pages/Cart'
import Home from './Pages/Home'



function App() {

  return (
    <>
     <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/whishlist' element={<Whishlist/>}/>
          <Route path='cart' element={<Cart/>}/>
      </Routes>
     <Footer/>
    </>
  )
}

export default App