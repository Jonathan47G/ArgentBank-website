import { connect, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import "../../styles/MainSignIn/MainSignIn.css" 
import LoginForm from "../features/LoginForm";
import { Navigate } from "react-router";

function MainSignIn() {
	const user = useSelector((state) => state.auth.user)
	const token = useSelector((state) => state.auth.token)

	if (user && token) {
		return <Navigate to="/profile" replace />;
	}
	
	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<LoginForm loginUser={loginUser} />
			</section>
		</main>
	);
}

export default connect(null, { loginUser })(MainSignIn);
