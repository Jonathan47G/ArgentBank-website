import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RedirectionSiNonConnecte = ({ children }) => {
	const token = useSelector((state) => state.auth.token);
	const user = useSelector((state) => state.auth.user)
		if (token && user) {
			return children;
		}
		return <Navigate to="/login" replace />;
};

export default RedirectionSiNonConnecte;
