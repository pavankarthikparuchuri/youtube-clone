import React from "react";

const VideoCard = ({ info }) => {
  const {
    snippet: {
      channelTitle,
      title,
      thumbnails: {
        medium: { url },
      },
    },
    statistics: { viewCount },
  } = info;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export const fn = (VideoCard) => {
  return (props) => {
    return (
      <>
        <div className="p-1 m-1 border border-red-900">
          <VideoCard {...props} />
        </div>
      </>
    );
  };
};

export default VideoCard;
