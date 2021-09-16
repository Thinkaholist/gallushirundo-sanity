export default {
  title: 'Styles',
  name: 'styles',
  description:
    'Give a number between 0 and 100 to describe how relevant this style to your band.',
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
      title: 'Roots',
      name: 'roots',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100).required(),
    },
    {
      title: 'Gipsy',
      name: 'gipsy',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100).required(),
    },
    {
      title: 'Blues',
      name: 'blues',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100).required(),
    },
    {
      title: 'Pop',
      name: 'pop',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100).required(),
    },
    {
      title: 'Disco',
      name: 'disco',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100).required(),
    },
  ],
};
