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
        source: 'title',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      description:
        'A short summary of what is this article about (Max. 140 characters)',
      rows: 3,
      validation: (Rule) =>
        Rule.required().max(140).error(`Excerpt should 140 characters maximum`),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'portableText',
    },
  ],
};
