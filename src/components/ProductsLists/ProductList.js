import React from 'react'
import {FcLike} from 'react-icons/fc'
import {MdAddchart} from 'react-icons/md'

const ProductList = ({url ,title,price}) => {
    let colors = ['red','yellow','blue','green','pink'];
  return (
      <div className='productlist'>
        
        <div className='productlist-container'>
       
            <div className='productlist-img'>
            <div className='icon-colors'>
            <div className='color'>
                {
                    colors.map(color=>(
                        <span key={color} style={{backgroundColor:color}}></span>
                    ))
                }
            </div>
            <div className='icons'>
                <span>
                    <FcLike className='like' />
                </span>
                <span>
                    <MdAddchart className='add' />
                </span>
            </div>
        </div>
                <img src={url} alt={title} />
            </div>
            <div className='productlist-details'>
                <h4>{title}</h4>
                <p>${price}</p>
            </div>

        </div>
      </div>
  )
}

export default ProductList