import React from 'react'
import '../styles/cruises.css'

function Cruises() {
  return(
    <div className='cruises'>
        <p id='heading1'>CRUISES</p>
        <h2 id='heading2'>Our popular <br/>cruises</h2>
        <div className='cruises-packages'>
            <div className='package1'>
                <img src="/assets/img/cruise2.jpg" alt="cruise2" />
                <a href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Goa</a>
                <h2>2 Nights</h2>
                <p>₹21,499</p>
            </div>
            <div className='package1'>
                <img id='second-img' src="/assets/img/cruise3.jpg" alt="cruise3" />
                <a id='second-a' href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Lakshadweep</a>
                <h2 id='second-h2'>3 Nights</h2>
                <p id='second-p'>₹28,999</p>
            </div>
            <div className='package1'>
                <img src="/assets/img/cruise4.jpg" alt="cruise4" />
                <a href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Male</a>
                <h2>7 Nights</h2>
                <p>₹83,954</p>
            </div>
        </div>
    </div>
  )
}
export default Cruises