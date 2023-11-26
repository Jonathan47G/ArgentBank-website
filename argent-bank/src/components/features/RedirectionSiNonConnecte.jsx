import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RedirectionSiNonConnecte = ({ children }) => {
	const token = useSelector((state) => state.auth.token); 
		if (token) {
			return children;
		}
		return <Navigate to="/login" replace />;
};

export default RedirectionSiNonConnecte;
