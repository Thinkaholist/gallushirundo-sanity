import React from 'react';
import usePromise from 'react-use-promise';
import { client } from '../../src/client';

function ArtistEmbed(props) {
  const artistId = props?.value?.artist?._ref;

  const query = `*[_id == $artistId][0]`;

  const [result, error, state] = usePromise(
    () => client.fetch(query, { artistId }),
    []
  );

  return (
    <>
      {result && (
        <>
          <div style={{ border: '1px solid', padding: 10 }}>
            <h3>{result.name}</h3>
            <p>{result.bio}</p>
          </div>
        </>
      )}
    </>
  );
}

export default {
  title: 'Artist embed',
  name: 'artistEmbed',
  type: 'object',
  fields: [
    {
      title: 'artist',
      name: 'artist',
      type: 'reference',
      to: [{ type: 'artist' }],
    },
  ],
  preview: {
    select: {
      artist: 'artist',
    },
    component: ArtistEmbed,
  },
};
