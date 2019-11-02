import React, { FC } from "react";

import { RecentlyPlayedTrack } from "./user_interfaces";

import "./styles/Track.css";

interface UserTrack {
	track: RecentlyPlayedTrack;
}

const UserRecentTrack: FC<UserTrack> = ({ track }) => {
	const trackInfo = track.track;
	const { name, artists, duration_ms } = trackInfo;
	const [artist] = artists;
	console.log(trackInfo);

	return (
		<div className="track">
			<div className="track-info">
				<h4>
					<a
						href={artist.external_urls.spotify}
						target="_blank"
						rel="noopener noreferrer"
					>
						{artist.name}
					</a>
				</h4>
				<p>{name}</p>
			</div>
			<div className="track-duration">{duration_ms}</div>
		</div>
	);
};

export default UserRecentTrack;
