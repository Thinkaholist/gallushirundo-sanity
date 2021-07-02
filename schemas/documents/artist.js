export default {
  type: 'document',
  name: 'artist',
  title: 'Artist',
  icon: () => '👨🏻‍🎤',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the band.',
      validation: (Rule) =>
        Rule.required()
          .max(40)
          .error(`Name of the band should 40 characters or less.`),
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
      name: 'pressKit',
      title: 'Press kit',
      type: 'file',
      description: '.zip file will be accepted',
      options: {
        storeOriginalFilename: true,
        accept: 'application/zip',
      },
      validation: (Rule) =>
        Rule.required()
          .max(20)
          .warning(`A bor neve ne legyen több, mint 20 karakter.`),
    },
    {
      name: 'published',
      title: 'Published?',
      type: 'boolean',
      description:
        "If published it will be visible on the website if not it's a draft.",
      initialValue: false,
    },
  ],
};
