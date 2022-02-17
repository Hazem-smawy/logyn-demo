import React from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import ProductLists from '../../components/ProductsLists/ProductsLists'
const ProductsList = () => {
  return (
    <div>
        <Header />
        <NavBar />
        <ProductLists />
    </div>
  )
}

export default ProductsList;