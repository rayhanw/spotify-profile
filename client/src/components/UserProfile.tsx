import React, { FC } from "react";

export interface UserInfo {
	display_name: string;
	external_urls: any;
	followers: any;
	href: string;
	id: string;
	images: any;
	type: any;
	uri: any;
}

const UserProfile: FC<UserInfo> = ({
	display_name,
	external_urls,
	id,
	images
}) => {
	return (
		<div>
			<div>
				<img src={images[0].url} alt="avatar" />
				<h1>{display_name}</h1>
				<a
					href={external_urls.spotify}
					target="_blank"
					rel="noopener noreferrer"
				>
					{id}
				</a>
			</div>
		</div>
	);
};

export default UserProfile;
