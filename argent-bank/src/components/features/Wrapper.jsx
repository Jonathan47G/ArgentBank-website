import React from "react";
import { fetchPutUserData } from "../../redux/actions/putUserActions";
import { useDispatch, useSelector } from "react-redux";

const UserWrapper = ({ userName, firstName, lastName, onCancel}) => {
	const dispatch = useDispatch();
	const token = useSelector ((state) => state.auth.token);

  const handleSave = (event) => {
    event.preventDefault();
    
    const newUsername = event.target.elements.username.value;
	
    dispatch(fetchPutUserData(newUsername, token));
  };

	return (
		<form className="user-wrapper" onSubmit={handleSave}>
			<h1>Edit user info</h1>
			<div className="input-wrapper">
				<label>User Name:</label>
				<input type="text" name="username" defaultValue={userName} />
			</div>
			<div className="input-wrapper">
				<label>First Name:</label>
				<input type="text" name="firstname" value={firstName} readOnly />
			</div>
			<div className="input-wrapper">
				<label>Last Name:</label>
				<input type="text" name="lastname" value={lastName} readOnly />
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
