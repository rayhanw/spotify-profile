import React, { FC } from "react";

import "./styles/Navbar.css";

const Navbar: FC = () => {
	return (
		<div className="icons">
			<a href="#profile" className="icon">
				<i className="material-icons">face</i>
			</a>
			<a href="#playlist" className="icon">
				<i className="material-icons">playlist_play</i>
			</a>
			<a href="#track" className="icon">
				<i className="material-icons">headset</i>
			</a>
			<a href="#artist" className="icon">
				<i className="material-icons">mood</i>
			</a>
		</div>
	);
};

export default Navbar;
