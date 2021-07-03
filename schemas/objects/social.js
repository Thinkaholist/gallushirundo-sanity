export default {
  title: 'Social Links',
  name: 'social',
  type: 'object',
  fieldsets: [
    {
      name: 'social',
      title: 'Social media accounts',
      options: {
        collapsible: true,
        collapsed: false,
        columns: 2,
      },
    },
  ],
  fields: [
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'url',
      // fieldset: 'social',
      validation: (Rule) =>
        Rule.uri(['http', 'https']).error(`Should be a valid URL`),
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'url',
      // fieldset: 'social',
      validation: (Rule) =>
        Rule.uri(['http', 'https']).error(`Should be a valid URL`),
    },
    {
      title: 'YouTube',
      name: 'youtube',
      type: 'url',
      // fieldset: 'social',
      validation: (Rule) =>
        Rule.uri(['http', 'https']).error(`Should be a valid URL`),
    },
    {
      title: 'Spotify',
      name: 'spotify',
      type: 'url',
      // fieldset: 'social',
      validation: (Rule) =>
        Rule.uri(['http', 'https']).error(`Should be a valid URL`),
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url',
      // fieldset: 'social',
      validation: (Rule) =>
        Rule.uri(['http', 'https']).error(`Should be a valid URL`),
    },
  ],
};
