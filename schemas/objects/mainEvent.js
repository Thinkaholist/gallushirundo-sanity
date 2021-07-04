export default {
  title: 'Main event',
  name: 'mainEvent',
  type: 'object',
  description:
    'The name and website of the main event where this concert will happen. Could be a Facebook event or a ticket selling site too',
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
