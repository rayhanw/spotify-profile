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

	return <div className="playlists">{renderPlaylist()}</div>;
};

export default UserPlaylists;
