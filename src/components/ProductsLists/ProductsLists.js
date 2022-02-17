import './productslists.css'
import React from 'react'
import ProductList from './ProductList'
import {data} from '../../data';

const ProductLists = () => {
  return (
    <div className='productslists-container'>
       {
         data.map(product =>(
           <ProductList
              key={product.url}
              url={product.url}
              price={product.price}
              title={product.title}
           />
         ))
       }
    </div>
  )
}

export default ProductLists