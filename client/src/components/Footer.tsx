import React, { FC } from "react";

import "./styles/Footer.css";

const Footer: FC = () => {
	return (
		<footer>
			<a
				href="https://github.com/rayhanw/spotify-profile"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="fab fa-github"></i> Report an issue on Github
			</a>
			<p>
				Created by&nbsp;
				<a
					href="https://github.com/rayhanw"
					target="_blank"
					rel="noopener noreferrer"
				>
					Rayhan Wirjowerdojo
				</a>
			</p>
		</footer>
	);
};

export default Footer;
