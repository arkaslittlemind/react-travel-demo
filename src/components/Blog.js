import React from 'react'
import '../styles/blog.css'
function Blog() {
  return (
    <div className='blog'>
      <div className='blog-child1'>
        <p>Blog</p>
      </div>
      <div className='blog-child2'>

        <div className='card'>
          <img src="/assets/img/Blog images/blog-3.jpg" id='blog' alt="blog"/>
            <span>15 March 2022 / Thailand Tour</span><br/>
            <a href='https://blogs.trip-cart.com/2022/03/16/ladakh-the-land-of-high-passes/' id='blog-title'>Travelling to Thailand?</a>
            <p></p>
            <a href='https://blogs.trip-cart.com/2022/03/16/ladakh-the-land-of-high-passes/' id='link'>Read Full Article→</a>
        </div>

        <div className='card'>
          <img src="/assets/img/Blog images/blog-2.jpg" id='blog' alt="blog"/>
          <span>14 March 2022 / Nepal</span><br/>
          <a href='https://blogs.trip-cart.com/2022/03/14/nepal-welcomes-tourists-new-visa-rules-fees/' id='blog-title'>Nepal welcomes tourists! </a>
          <p></p>
          <a href='https://blogs.trip-cart.com/2022/03/14/nepal-welcomes-tourists-new-visa-rules-fees/' id='link'>Read Full Article →</a>  
        </div>

        <div className='card'>
          <img src="/assets/img/Blog images/blog-1.jpg" id='blog' alt="blog"/>
          <span>16 March 2022 / Ladakh Treks</span><br/>
          <a href='https://blogs.trip-cart.com/2022/03/16/ladakh-the-land-of-high-passes/' id='blog-title'>Travelling to Ladakh?</a>
          <p></p>
          <a href='https://blogs.trip-cart.com/2022/03/16/ladakh-the-land-of-high-passes/' id='link'>Read Full Article→</a>
        </div>
      </div>
    </div>
  )
}

export default Blog