import React from "react";

export function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
			<div className="container">
				<a className="navbar-brand font-weight-bold" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-sm-start justify-content-md-end"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link font-weight-bold" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link font-weight-bold" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link font-weight-bold" href="#">
								Services
							</a>
						</li>
						<li className="nav-item font-weight-bold">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
