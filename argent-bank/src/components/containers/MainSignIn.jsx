import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import "../../styles/MainSignIn/MainSignIn.css" 
import LoginForm from "../features/LoginForm";

function MainSignIn() {
	
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
