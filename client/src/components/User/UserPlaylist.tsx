import React, { FC } from "react";

import { Playlist } from "./user_interfaces";

interface PlaylistProps {
	playlist: Playlist;
}

const UserPlaylist: FC<PlaylistProps> = ({ playlist }) => {
	console.log(playlist);
	const [, , uri] = playlist.uri.split(":");

	return (
		<div className="playlist">
			<h4>{playlist.name}</h4>
			<iframe
				src={`https://open.spotify.com/embed/playlist/${uri}`}
				width="300"
				height="380"
				frameBorder="0"
				allow="encrypted-media"
				title={playlist.name}
			></iframe>
		</div>
	);
};

export default UserPlaylist;
