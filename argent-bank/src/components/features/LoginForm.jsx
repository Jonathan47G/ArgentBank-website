import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import RememberMe from "./RememberMe";

const LoginForm = ({ loginUser }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({ email, password })
          .then(() => {
            // Redirige l'utilisateur vers User.jsx
            navigate("/profile");
          })
          .catch((error) => {
            // Gère les erreurs, affiche des messages d'erreur, etc.
            console.log('echec', error);
          });
      };

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<RememberMe />
			<button className="sign-in-button" type="submit">
				Sign In
			</button>
		</form>
	);
};

export default connect(null, { loginUser })(LoginForm);
