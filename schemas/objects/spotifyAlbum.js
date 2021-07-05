import React from 'react';

function SpotifyAlbumPreview({ value: { albumLink, isCompact } }) {
  const albumId = albumLink?.split('/')[4]?.split('?')[0];

  if (!albumId || albumId.length !== 22) {
    return <div>Missing or Bad Album ID!</div>;
  }

  const embedUrl = `https://open.spotify.com/embed/album/${albumId}`;

  return (
    <>
      <iframe
        title='Spotify Album Preview'
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
  name: 'spotifyAlbum',
  type: 'object',
  title: 'Spotify Album embed',
  fields: [
    {
      title: 'Album link',
      name: 'albumLink',
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
      albumLink: 'albumLink',
      isCompact: 'compactView',
    },
    component: SpotifyAlbumPreview,
  },
};
