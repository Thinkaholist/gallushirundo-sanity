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
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
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
                initialValue: true,
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
    { type: 'imageEmbed' },
    { type: 'youtubeVideo' },
    { type: 'spotifyAlbum' },
    { type: 'spotifyTrack' },
    // { type: 'eventEmbed' },
    // { type: 'postEmbed' },
    // { type: 'artistEmbed' },
    // { type: 'instagramEmbed' },
    { type: 'bandcampAlbum' },
  ],
};
