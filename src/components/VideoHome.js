import React from 'react';

const VideoHome = (props) => {
//   const { key, name } = videoData;
const key = props.key;
const name = props.name;

  // Construct the YouTube embedded video URL
  const youtubeUrl = `ht3tps://www.youtube.com/embed/${key}?autoplay=1&mute=1`;

  return (
    <div>
      <h2>{name}</h2>
      <iframe
        title={name}
        width="560"
        height="315"
        src={youtubeUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoHome;
