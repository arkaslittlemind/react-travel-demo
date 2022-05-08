import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <footer>    
        <div className="content">
            <div className="top">
                <div className="logo-details">
                    <img src="assets/img/Logo type 1-01.png" alt="logo"/>
                    <p>Tripcart Tours and Travels India LLP<br/>Registered Address: 402, 4th Floor, Swagat Building, Near Lal Bungalow, CG<br/>Road, Ahmedabad- 380009</p>
                </div>
               
            <div className="media-icons">
                <a href="https://www.facebook.com/tripcartindia"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/tripcartindia"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/tripcartindia/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/tripcartindia/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.youtube.com/c/TripCartOfficial"><i className="fab fa-youtube"></i></a>
                </div>
        </div>
            <div className="link-boxes">
                <ul className="box">
                    <li className="link_name">About Us</li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <ul className="box">
                    <li className="link_name">Experiences</li>
                    <li><a href="#">Honeymoon</a></li>
                    <li><a href="#">Beaches</a></li>
                    <li><a href="#">Cruises</a></li>
                    <li><a href="#">Rentals</a></li>
                    <li><a href="#">Adventure</a></li>
                </ul>
                <ul className="box">
                    <li className="link_name">Policies</li>
                    <li><a href="t&c.html">Terms & Conditions</a></li>
                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="cancellation-policy.html">Cancellations</a></li>
                </ul>
                <ul className="box input-box">
                    <li className="link_name">Subscribe to our Newsletter</li>
                    <li><input type="text" placeholder="Enter your email"/></li>
                    <li><input type="button" value="Subscribe"/></li>
                </ul>
            </div>
    </div>

       <img id='gplay' src="/assets/img/google-play-badge.png" alt="gplay" />

    <div className="bottom-details">
        <div className="bottom_text">
            <span className="copyright_text">Copyright © 2022 <a href="https://trip-cart.com/">TripCart.</a>All
                rights reserved</span>
        </div>
    </div>
</footer>

  )
}

export default Footer