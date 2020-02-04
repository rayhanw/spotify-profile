import React, { FC } from "react";

import UserTopTrack from "./UserTopTrack";
import { TopTracks } from "./user_interfaces";

const UserTopTracks: FC<TopTracks> = props => {
  const renderTrack = (): JSX.Element[] => {
    return props.items.map((item: any) => (
      <UserTopTrack track={item} key={item.id} />
    ));
  };

  return (
    <div className="tracks-container">
      <h3>Top tracks</h3>
      <div className="top-tracks-header">
        <h4>Title</h4>
        <h4>Artist</h4>
        <h4>Album</h4>
        <h4>Duration</h4>
      </div>
      <div className="top-tracks">{renderTrack()}</div>
    </div>
  );
};

export default UserTopTracks;
