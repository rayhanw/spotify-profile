import React, { FC, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import UserProfile from "./UserProfile";

import "./styles/App.css";

type ParamsToken = {
	accessToken: string;
	refreshToken: string;
	username: string;
} | null;
type NowPlaying = { name: string; albumArt: string };
interface UserInfo {
	display_name: string;
	external_urls: any;
	followers: any;
	href: string;
	id: string;
	images: any;
	type: any;
	url: any;
}

const App: FC = () => {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);

	const getParams = (): ParamsToken => {
		let [
			accessToken,
			refreshToken,
			uri
		]: string[] = window.location.pathname.split("&");

		if (accessToken && refreshToken && uri) {
			accessToken = accessToken.replace("/access_token=", "");
			refreshToken = refreshToken.replace("refresh_token=", "");
			uri = uri.replace("uri=", "").replace("spotify%3Auser%3A", "");
			return { accessToken, refreshToken, username: uri };
		}

		return null;
	};

	const getNowPlaying = (spotify: any, username: string): void => {
		spotify
			.getUser("tygrand")
			.then((response: UserInfo) => console.log(response));
	};

	useEffect(() => {
		const token = getParams();
		const spotify = new SpotifyWebApi();

		if (token) {
			spotify.setAccessToken(token.accessToken);
			setLoggedIn(true);
			getNowPlaying(spotify, token.username);
		}
	}, []);

	const renderLogin = (): JSX.Element => {
		if (loggedIn) {
			return <UserProfile />;
		}

		return (
			<header className="App-header">
				<a href="http://localhost:8888">Login to Spotify</a>
			</header>
		);
	};

	return (
		<div className="App">
			<main>{renderLogin()}</main>
		</div>
	);
};

export default App;
