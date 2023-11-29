import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/MainUsers/MainUsers.css";
import RedirectionSiNonConnecte from "../features/RedirectionSiNonConnecte";
import UserWrapper from "../features/Wrapper";

function MainUser() {
	const user = useSelector((state) => state.auth.user);
	const [wrapperOpen, setWrapperOpen] = useState(false);

	function basculeWrapper() {
		setWrapperOpen((prevIsOpen) => !prevIsOpen);
	}

	function handleCancel() {
		setWrapperOpen(false);
	}

	if (!user) {
		return <RedirectionSiNonConnecte />;
	}

	return (
		<>
			<div className="header">
				{!wrapperOpen && (
					<>
						<h1>
							Welcome back
							<br />
							{user.firstName} {user.lastName}
						</h1>

						<button onClick={basculeWrapper} className="edit-button">
							Edit Name
						</button>
					</>
				)}
				{wrapperOpen && (
					<UserWrapper
						userName={user.userName}
						firstName={user.firstName}
						lastName={user.lastName}
						onCancel={handleCancel}
					/>
				)}
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</>
	);
}

export default MainUser;