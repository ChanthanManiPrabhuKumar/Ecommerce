import React from 'react'
import hero_img from '../../assets/hero.png'
import './Hero.css'
import { FaShippingFast } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { MdPayment } from 'react-icons/md'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_top">
            <div className="hero_left">
                <h2>Elevate Your Wardrobe</h2>
                <h1>Discover Timeless Style and Unmatchered Comfort</h1>
                <p>Shop the latest trends and classic essentials just for you</p>
            </div>
            <div className="hero_right">
                <img src={hero_img} alt='hero_img'/>
            </div>
        </div>
        <div className="hero_bottom">
            <div className="hero_content">
                <div className="info_icon"><FaShippingFast className='hero_cc-icon'/></div>
                <div className="details">
                    <h3>Free Shipping</h3>
                    <p>Free Shipping on order</p>
                </div>
            </div>
            <div className="hero_content">
                <div className="info_icon"><BiSupport className='hero_cc-icon'/></div>
                <div className="details">
                    <h3>24/7 Support</h3>
                    <p>Full support on process</p>
                </div>
            </div>
            <div className="hero_content">
                <div className="info_icon"><MdPayment className='hero_cc-icon'/></div>
                <div className="details">
                    <h3>Secure Payment</h3>
                    <p>Your Payment is secure</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
