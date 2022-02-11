import React from 'react';
import {FcLike} from 'react-icons/fc'
import {MdAddchart} from 'react-icons/md'
const Product = ({url,title,price}) => {
  return (
    <>
        
        <div className='product'>

            <div className='product-img'>
                <span><FcLike className='product-icon' /></span>
                <img src={url} alt={title}/>
            </div>
            <div className='product-text'>
               <div>
                    <h4>{title}</h4>
                    <p>${price}</p>
               </div>
               <span>
                   <MdAddchart className='product-icon' />
                </span>
            </div>
        </div>
    </>
  );
};

export default Product;
