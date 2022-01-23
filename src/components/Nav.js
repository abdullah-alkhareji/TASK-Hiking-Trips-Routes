import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
	return (
		<nav
			className='navbar navbar-expand-lg bg-secondary text-uppercase fixed-top'
			id='mainNav'>
			<div className='container'>
				<Link className='navbar-brand' to='/'>
					Hike
				</Link>

				<div className='collapse navbar-collapse' id='navbarResponsive'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item mx-0 mx-lg-1'>
							<NavLink className='nav-link py-3 px-0 px-lg-3 rounded' to='/'>
								Home
							</NavLink>
						</li>
						<li className='nav-item mx-0 mx-lg-1'>
							<NavLink
								className='nav-link py-3 px-0 px-lg-3 rounded'
								to='/tripslist'>
								Trips
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
