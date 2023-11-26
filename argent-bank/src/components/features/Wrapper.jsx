import React from "react";

const UserWrapper = ({ userName, firstName, lastName, onCancel }) => {

	return (
		<form className="user-wrapper">
			<h1>Edit user info</h1>
			<div className="input-wrapper">
				<label>User Name:</label>
				<input type="text" id="username" defaultValue={userName} />
			</div>
			<div className="input-wrapper">
				<label>First Name:</label>
				<input type="text" id="firstname" value={firstName} readOnly />
			</div>
			<div className="input-wrapper">
				<label>Last Name:</label>
				<input type="text" id="lastname" value={lastName} readOnly />
			</div>
			<div className="button-user-edit">
				<button type="submit" className="edit-button">
					Save
				</button>
				<button type="button" className="edit-button" onClick={onCancel}>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default UserWrapper;
