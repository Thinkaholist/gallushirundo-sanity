import React from 'react';

export default {
  title: 'Portable text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            title: 'Internal Link',
            name: 'internalLink',
            type: 'object',
            fields: [
              {
                title: 'Reference',
                name: 'reference',
                type: 'reference',
                to: [{ type: 'artist' }, { type: 'post' }],
              },
            ],
            blockEditor: {
              icon: () => <div>🔗</div>,
              render: ({ children }) => <span>{children} 🔗</span>,
            },
          },
          {
            title: 'External Link',
            name: 'externalLink',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'url',
                type: 'url',
              },
              {
                title: 'Open in a new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
            blockEditor: {
              icon: () => <div>🌎</div>,
              render: ({ children }) => <span>{children} 🌎</span>,
            },
          },
        ],
      },
    },
    { type: 'youtubeVideo' },
    { type: 'spotifyAlbum' },
  ],
};
