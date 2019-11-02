import React, { FC } from "react";

import UserPlaylists from "./UserPlaylists";
import { UserInfo } from "./user_interfaces";

import "./styles/Profile.css";

const UserProfile: FC<UserInfo> = props => {
	const renderPlaylists = () => {
		return <UserPlaylists {...props.playlists} />;
	};

	return (
		<div className="User-profile">
			<div>
				<div className="profile-header">
					<img src={props.images[0].url} alt="avatar" className="avatar" />
					<div className="profile-subheader">
						<h1 style={{ marginBottom: 0, color: "white" }}>
							{props.display_name}
						</h1>
						<a
							href={props.external_urls.spotify}
							target="_blank"
							rel="noopener noreferrer"
							className="profile-link"
						>
							{props.id}
						</a>
					</div>
				</div>
			</div>
			<div>{renderPlaylists()}</div>
		</div>
	);
};

export default UserProfile;