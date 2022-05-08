import React from 'react'
import '../styles/subheader.css'
function SubHeader() {
  return (
    <div className='main'>
      <div className='main-child1'>
        <p>We Provide Best</p>
        <span> Choose from various destinations worldwide </span>
      </div>
      <div className='main-child2'>

        <div className='card'>
          <img src="/assets/img/trvl_agncy1.svg" id='trvl' alt="trvl"/>
          <h2>Select destination</h2>
          <p>At first choose the place you want to go</p>
        </div>

        <div className='card'>
          <img src="/assets/img/trvl_agncy2.svg" id='trvl' alt="trvl"/>
          <h2>Book a trip </h2>
          <p>Book your tip from our exclusive offers </p>
        </div>

        <div className='card'>
          <img src="/assets/img/trvl_agncy3.svg" id='trvl' alt="trvl"/>
          <h2>Take your flight </h2>
          <p>Take your flight on scheduled date and joy </p>
        </div>
      </div>
    </div>
  )
}

export default SubHeader