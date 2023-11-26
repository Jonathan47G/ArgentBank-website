import React from "react";
import Header from "../components/containers/Header";
import Footer from "../components/containers/Footer";
import MainUsers from "../components/containers/MainUsers";

function Users() {
	return (
		<>
			<Header />
			<main className="main bg-dark">
				<MainUsers />
			</main>
			<Footer />
		</>
	);
}

export default Users;
