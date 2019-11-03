import React, { FC } from "react";

import { Artist as ArtistProps } from "./user_interfaces";

interface ArtistProp {
	artist: ArtistProps;
}

const Artist: FC<ArtistProp> = ({ artist }) => {
	const { followers, name, images, genres } = artist;
	const [first] = images;

	const renderGenres = (): JSX.Element[] => {
		console.log(genres.slice(0, 3));
		return genres.slice(0, 3).map((genre: any) => <li key={genre}>{genre}</li>);
	};

	return (
		<div className="Artist">
			<h3>
				{name} with {followers.total} followers
			</h3>
			<img
				src={first.url}
				alt={name}
				height={first.height / 2}
				width={first.width / 2}
			/>
			<ul className="genres">{renderGenres()}</ul>
		</div>
	);
};

export default Artist;
