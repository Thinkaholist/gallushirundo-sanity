import React from 'react';

function BandcampAlbumEmbed({ value: { embedCode } }) {
  const albumId = getBandcampAlbumId(embedCode);

  return (
    <>
      <iframe
        title='embed-bandcamp'
        style={{ border: 0, width: 400, height: 472 }}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/`}
        seamless
      ></iframe>
    </>
  );
}

function getBandcampAlbumId(embedCode) {
  const albumIdLength = 10;
  const term = 'album=';
  const regex = new RegExp(`${term}`);
  return embedCode?.substr(
    embedCode?.search(regex) + term.length,
    albumIdLength
  );
}

export default {
  name: 'bandcampAlbum',
  type: 'object',
  title: 'Bandcamp album embed',
  fields: [
    {
      title: 'Album embed code',
      name: 'embedCode',
      type: 'string',
    },
  ],
  preview: {
    select: {
      embedCode: 'embedCode',
    },
    component: BandcampAlbumEmbed,
  },
};
