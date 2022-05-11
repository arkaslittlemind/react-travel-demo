import React from 'react'
import '../styles/header.css'


function Header() {
	return (
		<section>
			<nav className='child1'>
				<img src="assets/img/Logo type 1-01.png" id='tripcart-logo' alt="logo"></img>
				<a href="https://trip-cart.com/">find a trip</a>
				<a href="https://trip-cart.com/">destinations</a>
				<a href="https://trip-cart.com/">why tripcart</a>
				<a href="https://13.232.50.173/">blog</a>
				<a href="Login/login.html">sign in</a>
				<a href="tel:919504154154">
					<button>Contact Us</button>
				</a>
			</nav>
			<div className='child2'>
				<h1>Exploring The World <br />In Comfort.</h1>
				<p>You do not have the right to remain silent… let us know what it<br /> takes to challenge you </p>
				<div className='search-bar-div'>
					<div className='input1'>
						<div>
							<img src="/assets/img/search.svg" id='search-img' alt="search-icon" />
							<input type="search" id="search-bar" placeholder='Search destination' />
						</div>
						<div>
							<img src="/assets/img/location-pin.svg" id='location-img' alt="location-icon" />
							<select id="dropdown">
								<option id='opt1' value="2 Person">2 Person</option>
								<option value="5 Person">5 Person</option>
								<option value="7 Person">7 Person</option>
								<option value="9 Person">9 Person</option>
							</select>
						</div>
					</div>
					<button id='search-button'>Search</button>
				</div>

			</div>

		</section>
	)
}

export default Header
