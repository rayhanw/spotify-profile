import React, { FC } from "react";

import { Artist as ArtistProps } from "./user_interfaces";

interface ArtistProp {
	artist: ArtistProps;
}

const Artist: FC<ArtistProp> = ({ artist }) => {
	const { followers, name, images, genres, external_urls } = artist;
	const { spotify } = external_urls;
	const [first] = images;

	const renderGenres = (): JSX.Element[] => {
		return genres
			.slice(0, 3)
			.sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0))
			.map((genre: any) => <li key={genre}>{genre}</li>);
	};

	const renderName = (): JSX.Element => {
		if (first) {
			return (
				<>
					<a className="artist-name" href={first.url}>
						{name}
					</a>{" "}
				</>
			);
		}

		return (
			<>
				<p className="artist-name">
					{name} (<span>Artist link does not exist</span>)
				</p>
			</>
		);
	};

	const renderImage = (): JSX.Element => {
		if (first) {
			return (
				<img
					src={first.url}
					alt={name}
					height={first.height / 2}
					width={first.width / 2}
				/>
			);
		}

		return (
			<div style={{ height: 320, width: 320 }}>
				<p style={{ marginBottom: 0 }}>No image available</p>
			</div>
		);
	};

	return (
		<div className="Artist">
			<h3>
				{renderName()}
				with <span style={{ color: "white" }}>{followers.total}</span> followers
			</h3>
			<a
				href={spotify}
				target="_blank"
				rel="noopener noreferrer"
				className="artist-photo"
			>
				{renderImage()}
			</a>
			<ul className="genres">{renderGenres()}</ul>
		</div>
	);
};

export default Artist;
