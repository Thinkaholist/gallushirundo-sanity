export default {
  title: 'Social Links',
  name: 'social',
  type: 'object',
  fields: [
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'url',
      validation: (Rule) =>
        Rule.uri(['http', 'https']).error(`Should be a valid URL`),
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'url',
      validation: (Rule) =>
        Rule.uri(['http', 'https']).error(`Should be a valid URL`),
    },
    {
      title: 'YouTube',
      name: 'youtube',
      type: 'url',
      validation: (Rule) =>
        Rule.uri(['http', 'https']).error(`Should be a valid URL`),
    },
    {
      title: 'Spotify',
      name: 'spotify',
      type: 'url',
      validation: (Rule) =>
        Rule.uri(['http', 'https']).error(`Should be a valid URL`),
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url',
      validation: (Rule) =>
        Rule.uri(['http', 'https']).error(`Should be a valid URL`),
    },
  ],
};
