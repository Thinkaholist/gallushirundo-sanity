export default {
  name: 'youtubeLink',
  title: 'YouTube link',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri(['http', 'https']).error(`Should be a valid URL`),
    },
  ],
};
