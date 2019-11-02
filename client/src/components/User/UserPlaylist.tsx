import React, { FC } from "react";

import { Playlist } from "./user_interfaces";

interface PlaylistProps {
	playlist: Playlist;
}

const UserPlaylist: FC<PlaylistProps> = ({ playlist }) => {
	const [, , uri] = playlist.uri.split(":");

	const showName = (): string => {
		const [first, second] = playlist.owner.display_name.split(" ");

		return `${first} ${second ? second : ""}`;
	};

	return (
		<div className="playlist">
			<h4>
				{playlist.name} by{" "}
				<a
					className="playlist-owner"
					href={playlist.owner.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					{showName()}
				</a>
			</h4>
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
