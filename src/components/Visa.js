import React from 'react'
import '../styles/visa.css'

function Rental() {
  return (
    <div className='visa'>
    <p id='heading1'>VISA & IMMIGRATION</p>
    <h2 id='heading2'>Hassle free Visa & <br/>Immigration! </h2>
    <div className='visa-packages'>
        <div className='package1'>
            <img src="/assets/img/online.jpg" alt="car" />
            <a href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Apply online</a>
        </div>
        <div className='package1'>
            <img src="/assets/img/visa.jpg" alt="bike" />
            <a id='visa'   href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Visa in 5 days</a>
        </div>
        <div className='package1'>
            <img id='third-img' src="/assets/img/travel ready.jpg" alt="cycle" />
            <a id='travel' href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Ready to travel!</a>
        </div>
    </div>
    </div>
  )
}

export default Rental