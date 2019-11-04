import React, { FC } from "react";

import { Artist as ArtistProps } from "./user_interfaces";

interface ArtistProp {
	artist: ArtistProps;
}

const Artist: FC<ArtistProp> = ({ artist }) => {
	const { followers, name, images, genres, external_urls } = artist;
	const { spotify } = external_urls;
	const [first] = images;

	console.log("images:", images);
	console.log("first:", first);

	const renderGenres = (): JSX.Element[] => {
		return genres
			.slice(0, 3)
			.sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0))
			.map((genre: any) => <li key={genre}>{genre}</li>);
	};

	return (
		<div className="Artist">
			<h3>
				<a className="artist-name" href={first.url}>
					{name}
				</a>{" "}
				with <span style={{ color: "white" }}>{followers.total}</span> followers
			</h3>
			<a
				href={spotify}
				target="_blank"
				rel="noopener noreferrer"
				className="artist-photo"
			>
				<img
					src={first.url}
					alt={name}
					height={first.height / 2}
					width={first.width / 2}
				/>
			</a>
			<ul className="genres">{renderGenres()}</ul>
		</div>
	);
};

export default Artist;
