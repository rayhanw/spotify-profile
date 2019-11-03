import React, { FC, useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import SEO from "./SEO";
import UserProfile from "./User/UserProfile";
import {
	UserInfo,
	DefaultUserInfo,
	Playlists,
	RecentlyPlayedTracks,
	FollowedArtists
} from "./User/user_interfaces";
import {
	getUserInformation,
	getUserPlaylists,
	getRecentlyPlayed,
	getFollowedArtists
} from "./spotify";

import "./styles/App.css";

type ParamsToken = {
	accessToken: string;
	refreshToken: string;
	username: string;
} | null;

const App: FC = () => {
	const [loggedIn, setLoggedIn] = useState<boolean>(false);
	const [userInfo, setUserInfo] = useState<UserInfo>(DefaultUserInfo);
	const [playlists, setPlaylists] = useState<Playlists>({
		href: "",
		items: []
	});
	const [recentTracks, setRecentTracks] = useState<RecentlyPlayedTracks[]>([]);
	const [followedArtists, setFollowedArtists] = useState<FollowedArtists>({
		items: []
	});

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

	useEffect(() => {
		const getAllInformation = async () => {
			const token = getParams();
			const spotify = new SpotifyWebApi();

			if (token) {
				spotify.setAccessToken(token.accessToken);
				setLoggedIn(true);
				setUserInfo(await getUserInformation(spotify, token.username));
				setPlaylists(await getUserPlaylists(spotify, token.username));
				setRecentTracks(await getRecentlyPlayed(spotify));
				setFollowedArtists(await getFollowedArtists(spotify));
			}
		};

		getAllInformation();
	}, []);

	const renderUser = (): JSX.Element => {
		if (
			loggedIn &&
			userInfo.display_name !== "" &&
			playlists.items.length > 0
		) {
			return (
				<UserProfile
					{...userInfo}
					playlists={playlists}
					recentTracks={recentTracks}
					followedArtists={followedArtists}
				/>
			);
		}

		return (
			<header className="App-header">
				<a href="/auth/spotify/login">Login to Spotify</a>
			</header>
		);
	};

	return (
		<div className="App">
			<SEO />
			<main>{renderUser()}</main>
		</div>
	);
};

export default App;
