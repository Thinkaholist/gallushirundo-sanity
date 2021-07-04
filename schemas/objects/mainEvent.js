export default {
  title: 'Main event',
  name: 'mainEvent',
  type: 'object',
  description:
    'The name and website of the main event where this concert will happen',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url',
    },
  ],
};
