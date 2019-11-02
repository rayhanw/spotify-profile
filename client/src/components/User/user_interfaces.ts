export interface UserInfo {
	display_name: string;
	external_urls: any;
	followers: any;
	href: string;
	id: string;
	images: any;
	type: any;
	uri: any;
	playlists: any;
}

interface PlaylistOwner {
	display_name: string;
	external_urls: any;
}

export interface Playlist {
	collaborative: boolean;
	external_urls: { spotify: string };
	href: string;
	id: string;
	images: { height: number; url: string; width: number }[];
	name: string;
	owner: PlaylistOwner;
	uri: string;
}

export interface Playlists {
	href: string;
	items: Playlist[];
}

export enum DefaultUserInfo {
	display_name = "",
	external_urls = "",
	followers = "",
	href = "",
	id = "",
	images = "",
	type = "",
	uri = "",
	playlists = ""
}
