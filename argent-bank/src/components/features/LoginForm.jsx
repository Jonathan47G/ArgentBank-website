import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import RememberMe from "./RememberMe";

const LoginForm = ({ loginUser }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const timer = setTimeout(() => {
			setErrorMessage("");
		}, 3000);

		return () => clearTimeout(timer);
	}, [errorMessage]);

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
			setErrorMessage("Invalid email or password.");
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
					required
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			{errorMessage && <div className="error-message">{errorMessage}</div>}
			<RememberMe />
			<button className="sign-in-button" type="submit">
				Sign In
			</button>
		</form>
	);
};

export default connect(null, { loginUser })(LoginForm);
