import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<Link to="/">
				<img
					className="imagen-logo mx-5"
					src="https://www.teleadhesivo.com/es/img/as555-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-.jpg"
					alt="Logo"
					style={{ cursor: "pointer" }} // Para indicar que es clickeable
				/>
			</Link>


			{/* <img className="imagen-logo" src="https://www.teleadhesivo.com/es/img/as555-jpg/folder/products-listado-merchanthover/vinilos-decorativos-logo-star-wars-.jpg" alt="Logo" /> */}
			<div className="ml-auto">
				<Link to="/demo">
					<div className="btn-group" role="group">
						<button type="button" className="btn-fav btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos
						</button>
						<ul className="dropdown-menu">
							{/* <li><a className="dropdown-item" href="#">Dropdown link</a></li>
							<li><a className="dropdown-item" href="#">Dropdown link</a></li> */}
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
