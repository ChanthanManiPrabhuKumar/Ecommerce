import React,{useContext} from 'react'
import { BiCart, BiUser } from 'react-icons/bi'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../ShopContent/ShopeContent'



const Navbar = () => {

  window.addEventListener("scroll", function (){
    const navbar = this.document.querySelector('.navbar')
    navbar.classList.toggle("acti", this.window.scrollY > 100)
  })



  const {itemAmount} = useContext(ShopContext)
  return (
    <div>
      <div className="navbar">
        <div className="logo">
            <h2>ShopeY</h2>
        </div>
        <div className="link">
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
                <li>Use App</li>
            </ul>
        </div>
        <div className="nav_icon_wrapper">
          <div className="nav_cart">
            <Link to='/cart'>
                < BiCart className='nav_icon'/>
                <p className='nav_cart_amount'>{itemAmount}</p>
                </Link>
          </div>
            <BiUser className='nav_icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
