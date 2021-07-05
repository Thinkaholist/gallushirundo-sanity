import React from 'react';

function SpotifyTrackPreview({ value: { trackLink, isCompact } }) {
  const trackId = trackLink?.split('/')[4]?.split('?')[0];

  if (!trackId || trackId.length !== 22) {
    return <div>Missing or Bad Track ID!</div>;
  }

  const embedUrl = `https://open.spotify.com/embed/track/${trackId}`;

  return (
    <>
      <iframe
        title='Spotify Track Preview'
        src={embedUrl}
        width='100%'
        height={isCompact ? '80' : '380'}
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
      ></iframe>
    </>
  );
}

export default {
  name: 'spotifyTrack',
  type: 'object',
  title: 'Spotify Track (Song) embed',
  fields: [
    {
      title: 'Track (Song) link',
      name: 'trackLink',
      type: 'url',
    },
    {
      title: 'Compact View',
      name: 'compactView',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      trackLink: 'trackLink',
      isCompact: 'compactView',
    },
    component: SpotifyTrackPreview,
  },
};
