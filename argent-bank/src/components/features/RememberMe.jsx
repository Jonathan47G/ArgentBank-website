import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRememberMe } from "../../redux/actions/authActions";

const RememberMe = () => {
	const dispatch = useDispatch();
	const rememberMe = useSelector((state) => state.auth.rememberMe);

	const handleCheckboxChange = () => {
		dispatch(setRememberMe(!rememberMe));
	};

	return (
		<div className="input-remember">
			<label htmlFor="remember-me">
				Remember Me
				<input
					type="checkbox"
					id="remember-me"
					checked={rememberMe}
					onChange={handleCheckboxChange}
				/>
			</label>
		</div>
	);
};

export default RememberMe;
