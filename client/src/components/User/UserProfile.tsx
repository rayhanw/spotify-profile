import React, { FC } from "react";

import UserPlaylists from "./UserPlaylists";
import UserRecentlyPlayed from "./UserRecentlyPlayed";
import UserFollowedArtists from "./UserFollowedArtists";
import { UserInfo } from "./user_interfaces";

import "./styles/Profile.css";

const UserProfile: FC<UserInfo> = props => {
	const renderPlaylists = (): JSX.Element => {
		return <UserPlaylists {...props.playlists} />;
	};

	const renderTracks = (): JSX.Element => {
		return <UserRecentlyPlayed {...props.recentTracks} />;
	};

	const renderFollowedArtists = (): JSX.Element => {
		return <UserFollowedArtists {...props.followedArtists.artists} />;
	};

	return (
		<div className="User-profile" id="profile">
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
			<div>{renderTracks()}</div>
			<div>{renderFollowedArtists()}</div>
		</div>
	);
};

export default UserProfile;
