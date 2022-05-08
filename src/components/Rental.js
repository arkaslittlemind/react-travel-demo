import React from 'react'
import '../styles/rental.css'

function Rental() {
  return (
    <div className='rental'>
    <p id='heading1'>Rentals</p>
    <h2 id='heading2'>Our popular <br/>rental</h2>
    <div className='rental-packages'>
        <div className='package1'>
            <img src="/assets/img/car rental.jpg" alt="car" />
            <a href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Car Rental</a>
        </div>
        <div className='package1'>
            <img src="/assets/img/bike rental.jpg" alt="bike" />
            <a id='bike'   href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Bike Rental</a>
        </div>
        <div className='package1'>
            <img id='third-img' src="/assets/img/cycle rental.jpg" alt="cycle" />
            <a id='cycle' href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Cycle Rental</a>
        </div>
    </div>
    </div>
  )
}

export default Rental