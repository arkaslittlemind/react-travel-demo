import React from 'react'
import '../styles/discount.css'

function Discount() {
  return(
    <div className='discount'>
        <p id='heading1'>SPECIAL OFFER</p>
        <h2 id='heading2'>Deals & Discounts</h2>
        <div className='discount-packages'>
            <div className='package1'>
                <img src="/assets/img/Deals & Discounts/nepal.jpg" alt="thailand" />
                <a href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Thailand</a>
                <h2>4 Nights</h2>
                <p>₹22,999</p>
            </div>
            <div className='package1'>
                <img id='second-img' src="/assets/img/Deals & Discounts/nepal.jpg" alt="nepal" />
                <a id='second-a' href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Nepal</a>
                <h2 id='second-h2'>6 Nights</h2>
                <p id='second-p'>₹23,999</p>
            </div>
            <div className='package1'>
                <img src="/assets/img/Deals & Discounts/aussie.jpg" alt="Australia" />
                <a href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Australia</a>
                <h2>5 Nights</h2>
                <p>₹125,999</p>
            </div>
        </div>
    </div>
  )
}
export default Discount;