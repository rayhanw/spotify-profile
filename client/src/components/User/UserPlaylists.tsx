import React, { FC } from "react";

import UserPlaylist from "./UserPlaylist";
import { Playlists, Playlist } from "./user_interfaces";

import "./styles/Playlists.css";

const UserPlaylists: FC<Playlists> = props => {
	const renderPlaylist = () => {
		return props.items.map((playlist: Playlist) => (
			<UserPlaylist playlist={playlist} key={playlist.id} />
		));
	};

	return (
		<div className="playlist-container" id="playlist">
			<h3 style={{ marginBottom: 0 }}>Playlists</h3>
			<div className="playlists">{renderPlaylist()}</div>
		</div>
	);
};

export default UserPlaylists;
