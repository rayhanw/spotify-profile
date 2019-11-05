import React, { FC } from "react";
import humanizeDuration from "humanize-duration";

import { TopTrackInfo } from "./user_interfaces";

interface TopTrackProps {
	track: TopTrackInfo;
}

const UserTopTrack: FC<TopTrackProps> = ({ track }) => {
	const humanizedDuration = (): string => {
		const options = { delimiter: ":" };
		const { duration_ms } = track;
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

	const renderExplicit = (): JSX.Element | null => {
		if (track.explicit) {
			return <span>Explicit</span>;
		}

		return null;
	};

	return (
		<div className="top-track">
			<div className="track-name">
				<p>{track.name}</p>
				{renderExplicit()}
			</div>
			<p>{track.artists[0].name}</p>
			<p>{track.album.name}</p>
			<p>{humanizedDuration()}</p>
		</div>
	);
};

export default UserTopTrack;
