import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import AdminLayout from './admin_layouts/admin_layout'
import ProductList from './admin_layouts/ProductList'
import AddProduct from './admin_layouts/AddProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            {/* <Route index element={} */}
          </Route> 
          <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<ProductList/>}/>
            <Route path='add-product' element={<AddProduct/>}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
