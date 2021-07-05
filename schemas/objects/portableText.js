import React from 'react';

export default {
  title: 'Portable text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Heading 5', value: 'h5' },
        { title: 'Heading 6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' },
      ],
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
                to: [
                  {
                    type: 'artist',
                  },
                  {
                    type: 'post',
                  },
                  {
                    type: 'event',
                  },
                ],
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
    { type: 'imageEmbed' },
  ],
};
