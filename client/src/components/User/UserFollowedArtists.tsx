import React, { FC } from "react";

import Artist from "./Artist";

import { FollowedArtists, Artist as ArtistProps } from "./user_interfaces";
import "./styles/Artist.css";

const UserFollowedArtists: FC<FollowedArtists> = ({ items }) => {
	const renderArtists = (): JSX.Element[] | undefined => {
		if (items) {
			return items.map((artist: ArtistProps) => (
				<Artist artist={artist} key={artist.id} />
			));
		}
	};

	return <div className="artists">{renderArtists()}</div>;
};

export default UserFollowedArtists;
