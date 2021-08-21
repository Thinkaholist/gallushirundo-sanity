export default {
  title: 'Styles',
  name: 'styles',
  type: 'object',
  fields: [
    {
      title: 'Folk',
      name: 'folk',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100).required(),
    },
    {
      title: 'Punk',
      name: 'punk',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100).required(),
    },
    {
      title: 'Rock',
      name: 'rock',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100).required(),
    },
    {
      title: 'Acapella',
      name: 'acapella',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100).required(),
    },
  ],
};
