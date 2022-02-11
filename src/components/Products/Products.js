import './products.css'
import React from 'react';
import Product from './Product'
import ImageOne from '../../assets/image.jpg'
import ImageTwo from '../../assets/images (1).jpg'
import ImageThree from '../../assets/images.jpg'
import ImageFour from '../../assets/perFour.jpg'
import ImageFive from '../../assets/perOne.jpg'
import ImageSex from '../../assets/perTwo.jpg'
const Products = () => {
    let products =[
        {url:ImageOne,title:"perform one int the world",price:100},
        {url:ImageTwo,title:"specail one",price:10},
        {url:ImageThree,title:"important person",price:200},
        {url:ImageFour,title:"title of products",price:50},
        {url:ImageFive,title:"perform one int ",price:600},
        {url:ImageSex,title:"int the world",price:800},
    ]

  return (
      <div className='products-list'>
          {
              products.map(product =>(
                  <Product key={product.title}
                    url={product.url} 
                    title={product.title} 
                    price={product.price}
                  />
              ))
          }
      </div>
  );
};

export default Products;
