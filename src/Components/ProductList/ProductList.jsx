import React, {useContext} from 'react'
import './ProductList.css'
import {Link} from 'react-router-dom'
import { ShopContext } from '../ShopContent/ShopeContent'

const ProductList = () => {
    const {products,addtocart} = useContext(ShopContext) 
  return (
    <div>
      <div className="product_list">
        <h2>Our Elegants Collections</h2>
        <div className='product_grid'>
            {products.map((product) => {
                // destructure products
                const {id,image,title,price} = product;
                return (
                    <div className='product_card' key={product.id}>
                        <Link to={`/product/${product.id}`} key={product.id}>
                        <img src={image} alt='' className='product_img'/>
                        <div className='product_info'>
                            <h4>{title}</h4>
                            <p>${price}</p>
                        </div> 
                        </Link>
                        <button onClick={() => addtocart(product,id)} className='add-to-cart'>Add To Cart</button>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default ProductList
