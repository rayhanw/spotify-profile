import React, { FC } from "react";

export interface UserInfo {
	display_name: string;
	external_urls: any;
	followers: any;
	href: string;
	id: string;
	images: any;
	type: any;
	url: any;
}

const UserProfile: FC<UserInfo> = props => {
	console.log(props);

	return <div>Profile</div>;
};

export default UserProfile;
