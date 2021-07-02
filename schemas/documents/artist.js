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
      description: 'Only .zip file will be accepted',
      options: {
        storeOriginalFilename: true,
        accept: 'application/zip',
      },
      // validation: (Rule) =>
      //   Rule.custom((file) => {
      //     if (!file) return true;
      //     return file.asset.extension === 'zip';
      //   }).error(`File should be a .zip!`),
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Logo of the artist (SVG or PNG)',
      options: {
        hotspot: true,
      },
      // validation: (Rule) => Rule.required(),
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'social',
    },
    {
      title: 'Image Gallery',
      name: 'imageGallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      title: 'Video Gallery',
      name: 'videoGallery',
      description: 'Please enter YouToube links',
      type: 'array',
      of: [
        {
          type: 'url',
          validation: (Rule) =>
            Rule.uri(['http', 'https']).error(`Should be a valid URL`),
        },
      ],
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
