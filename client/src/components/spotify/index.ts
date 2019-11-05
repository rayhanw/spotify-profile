type Options = { limit: number };
const options: Options = { limit: 10 };

export const getUserInformation = async (spotify: any, username: string) => {
	const info = await spotify.getUser(username);
	return info;
};

export const getUserPlaylists = async (spotify: any, username: string) => {
	const info = await spotify.getUserPlaylists(username);
	return info;
};

export const getRecentlyPlayed = async (spotify: any) => {
	const info = await spotify.getMyRecentlyPlayedTracks(options);
	return info;
};

export const getFollowedArtists = async (spotify: any) => {
	const info = await spotify.getFollowedArtists(options);
	return info;
};

export const getTopTracks = async (spotify: any) => {
	const info = await spotify.getMyTopTracks(options);
	return info;
};
