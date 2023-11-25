import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
	const estAuthentifie = useSelector((state) => state.auth.isAuthenticated);
	const utilisateur = useSelector((state) => state.auth.user);
	return (
		<div>
			{estAuthentifie ? (
				<>
					<Link to="/profile" className="main-nav-item">
						<i className="fa fa-user-circle"></i>
						{utilisateur ? utilisateur.userName : "User"}
					</Link>
					<Link to="/" className="main-nav-item" href="./index.html">
						<i className="fa fa-sign-out"></i>
						Sign Out
					</Link>
				</>
			) : (
				<Link to="/login" className="main-nav-item">
					<i className="fa fa-user-circle"></i>
					Sign In
				</Link>
			)}
		</div>
	);
}

export default NavBar;
