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
      name: 'slug',
      title: 'URL identifier (slug)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'portableText',
    },
  ],
};
