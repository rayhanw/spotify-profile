import React, { FC } from "react";

import UserRecentTrack from "./UserRecentTrack";

import { RecentlyPlayedTracks, RecentlyPlayedTrack } from "./user_interfaces";

const UserRecentlyPlayed: FC<RecentlyPlayedTracks> = props => {
	const renderTrack = () => {
		if (props.items) {
			return props.items.map((track: RecentlyPlayedTrack, index: number) => {
				return <UserRecentTrack track={track} key={index} />;
			});
		}
	};

	return (
		<div>
			<h3 style={{ marginBottom: 0 }}>Recently played songs</h3>
			<div className="tracks">{renderTrack()}</div>
		</div>
	);
};

export default UserRecentlyPlayed;
