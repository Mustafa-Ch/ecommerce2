
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Home/Products'
import ProductsDisplay from './pages/Home/ProductsDisplay'
import SingleProduct from './pages/Home/SingleProduct'
import Carts from './pages/Home/Cart/Cart'
import Login from './pages/Home/Login'
import Signup from './pages/Home/Signup'
import Checkout from './pages/Home/Checkout'

function App() {


  return (
    <>
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/men' element={<ProductsDisplay category="men"/>}/>
      <Route path='/women' element={<ProductsDisplay category="women"/>}/>
      <Route path='/kids' element={<ProductsDisplay category="kid"/>}/>
      <Route path='/new' element={<ProductsDisplay category="New Collection"/>}/>
      <Route  path= "/shop/:ids" element={<SingleProduct/>}/>
      <Route  path= "/cart" element={<Carts/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
