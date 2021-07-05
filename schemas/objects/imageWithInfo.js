export default {
  title: 'Image with info',
  type: 'image',
  name: 'imageWithInfo',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'altText',
      type: 'string',
      title: 'Alt text',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
      validation: (Rule) =>
        Rule.required().error(
          `Alt text is necessary for SEO and accessibility. Please describe what is in the picture`
        ),
    },
  ],
};
