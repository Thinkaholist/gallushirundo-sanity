import React from 'react';
import usePromise from 'react-use-promise';
import { client } from '../../src/client';

function EmbedEvent(props) {
  const eventId = props?.value?.event?._ref;

  const query = `*[_id == $eventId][0]`;

  const [result, error, state] = usePromise(
    () => client.fetch(query, { eventId }),
    []
  );

  return (
    <>
      {result && (
        <>
          <div style={{ border: '1px solid', padding: 10 }}>
            <h3>{result.title}</h3>
            <p>
              {result.date} | {result.location}{' '}
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default {
  title: 'Event embed',
  name: 'eventEmbed',
  type: 'object',
  fields: [
    {
      title: 'event',
      name: 'event',
      type: 'reference',
      to: [{ type: 'event' }],
    },
  ],
  preview: {
    select: {
      event: 'event',
    },
    component: EmbedEvent,
  },
};
