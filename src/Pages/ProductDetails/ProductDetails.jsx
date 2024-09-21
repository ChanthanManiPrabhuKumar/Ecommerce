import React, {useContext} from 'react'
import { productsData } from '../../data'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../Components/ShopContent/ShopeContent'
import './ProductDetails.css'

const ProductDetails = () => {

  const {addtocart} = useContext(ShopContext)

  //get product id

  const {id} = useParams();

  //get product base id

  const product = productsData.find((product) => {
    return product.id === parseInt(id);
  })

    
  return (
    <div>
      <div className="product_details_info">
        <div className="detail_left">
            <img src={product.image}/>
        </div>
        <div className="detail_right">
          <h3>{product.title}</h3>
          <p className='product_price'>$ {product.price}</p>
          <p className='desc'>{product.description}</p>
          <button onClick={()=>{addtocart(product,id)}}>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
