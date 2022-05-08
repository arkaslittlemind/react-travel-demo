import React from 'react'
import '../styles/activities.css'

function Activities() {
  return (
    <div className='activities'>
    <p id='heading1'>ACTIVITIES</p>
    <h2 id='heading2'>Our popular <br/>activities</h2>
    <div className='activities-packages'>
        <div className='package1'>
            <img src="/assets/img/paragliding.jpg" alt="paragliding" />
            <a href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Paragliding</a>
        </div>
        <div className='package1'>
            <img src="/assets/img/rafting.jpg" alt="rafting" />
            <a id='rafting'   href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Rafting</a>
        </div>
        <div className='package1'>
            <img id='third-img' src="/assets/img/scubad.jpg" alt="scubadiving" />
            <a id='scuba' href="https://wa.me/919504154154?text=I%20visited%20your%20website%20and%20I%27m%20looking%20for%20holiday%20packages">Scuba Diving</a>
        </div>
    </div>
    </div>
  )
}

export default Activities