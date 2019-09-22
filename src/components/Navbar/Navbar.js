import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="navbar-brand">
				<img className="site__logo" src={logo} alt="logo" />
			</div>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<span className="nav-link">
							Home <span className="sr-only">(current)</span>
						</span>
					</li>
					<li className="nav-item">
						<span className="nav-link">About</span>
					</li>
					<li className="nav-item">
						<span className="nav-link">Tours</span>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
