import React, { FC } from "react";
import humanizeDuration from "humanize-duration";

import { RecentlyPlayedTrack } from "./user_interfaces";

import "./styles/Track.css";

interface UserTrack {
	track: RecentlyPlayedTrack;
}

const UserRecentTrack: FC<UserTrack> = ({ track }) => {
	const trackInfo = track.track;
	const { name, artists, duration_ms } = trackInfo;
	const [artist] = artists;

	const humanizedDuration = (): string => {
		const options = { delimiter: ":" };
		const duration = humanizeDuration(duration_ms, options)
			.replace(/minute(s)?/, "")
			.replace(" seconds", "");
		const [minutes, seconds] = duration.split(":");
		const minuteNumber = Number(minutes);
		const secondNumber = Number.parseInt(seconds, 10);
		if (String(secondNumber).length === 1) {
			return `${minuteNumber}:0${secondNumber}`;
		}

		return `${minuteNumber}:${secondNumber}`;
	};

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
			<div className="track-duration">{humanizedDuration()}</div>
		</div>
	);
};

export default UserRecentTrack;
