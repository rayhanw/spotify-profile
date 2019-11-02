import React, { FC } from "react";
import { Helmet } from "react-helmet";

import logo from "../images/spotify_icon.png";

const SEO: FC = () => {
	return (
		<Helmet>
			<title>Youtify</title>
			<meta name="title" content="Youtify" />
			<meta
				name="description"
				content="Ever wondered about your Spotify's profile information? Say no more, Youtify will help you see your profile."
			/>
			<link rel="shortcut icon" href={logo} />

			{/* Open Graph Tags */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://youtify.herokuapp.com/" />
			<meta property="og:title" content="Youtify" />
			<meta
				property="og:description"
				content="Ever wondered about your Spotify's profile information? Say no more, Youtify will help you see your profile."
			/>
			<meta property="og:image" content={logo} />

			{/* Twitter Card */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://youtify.herokuapp.com/" />
			<meta property="twitter:title" content="Youtify" />
			<meta
				property="twitter:description"
				content="Ever wondered about your Spotify's profile information? Say no more, Youtify will help you see your profile."
			/>
			<meta property="twitter:image" content={logo} />
		</Helmet>
	);
};
export default SEO;
