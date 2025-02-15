import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Component } from 'react'
import ProductList from './components/ProductList'
import ProductsState  from './context/ProductsState'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductsState>
      <ProductList/>
    </ProductsState>
    </>
  )
}

export default App;
