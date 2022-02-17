import './productinfo.css'
import React from 'react'
import Header from '../../components/Header/Header'
import Image from '../../assets/image.jpg'
import {FcLike} from 'react-icons/fc'
import {MdAddchart} from 'react-icons/md'

const ProductInfo = () => {
    let colors =['blue','green','brown']
  return (
    <div>
        <Header />
        <div className='productinfo-container'>
            <div className='productinfo-img'>
                <img src={Image} alt='info'/>
            </div>
            <div className='productinfo-info'>
                <span className='price'>Price</span>
                <h4>it is the title here</h4>
                <p>
                it is the title hereit is the title hereit is the title hereit is the title
                hereit is the title here it is the title hereit is the title hereit is the title hereit is the title
                hereit is the title here it is the title hereit is the title hereit is the title hereit is the title
                hereit is the title here it is the title hereit is the title hereit is the title hereit is the title
                hereit is the title here
                </p>
                <div className='color-quantity'>
                    <div className='info-color'>
                        {
                            colors.map(color=>(
                                <span key={color} style={{backgroundColor:color,boxShadow:`0 0 0 2 ${color}`}}></span>
                            ))
                        }
                    </div>
                    <div className='quantity'>
                        <span className='dec'>-</span>
                        <span className='count'>1</span>
                        <span className='inc'>+</span>
                    </div>
                   
                </div>
                <div className='info-add'>
                    <span>
                        <FcLike />
                    </span>
                    <button>
                      <p>  Add to card</p>
                        <p><MdAddchart className='add-icon'/></p>
                    
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProductInfo