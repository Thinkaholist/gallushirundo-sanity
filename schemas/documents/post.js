export default {
  type: 'document',
  name: 'post',
  title: 'Post',
  icon: () => '📝',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'artist',
                title: 'Artist',
                type: 'reference',
                to: { type: 'artist' },
              },
            ],
          },
        },
        { type: 'youtubeVideo' },
        { type: 'spotifyAlbum' },
      ],
    },
  ],
};
