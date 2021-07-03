import React from 'react';
import getYouTubeID from 'get-youtube-id';

function YouTubeVideoPreview({ value: { url } }) {
  const videoId = getYouTubeID(url);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  if (!videoId) return <div>Missing or Bad YouTube URL!</div>;

  return (
    <>
      <iframe
        width='100%'
        height='315'
        src={embedUrl}
        title='YouTube Preview'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>
    </>
  );
}

export default {
  name: 'youtubeVideo',
  type: 'object',
  title: 'YouTube video embed',
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: YouTubeVideoPreview,
  },
};
