export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 3,
      validation: (Rule) =>
        Rule.required().max(150).error('Should be max 150 characters'),
    },
    {
      name: 'contactImage',
      title: 'Contact Image',
      type: 'imageWithInfo',
    },
    {
      name: 'contactText',
      title: 'Contact text',
      type: 'text',
    },
    {
      title: 'References Headline',
      name: 'referencesHeadline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'references',
      type: 'array',
      title: 'References',
      description:
        'eg. Concrete and Grass - MainStage (CN). (Enter a reference then press Enter)',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'ctaText',
      title: 'Call To Action Text',
      type: 'text',
      rows: 2,
      validation: (Rule) =>
        Rule.required().max(150).error('Should be max 150 characters'),
    },
    {
      title: 'Contact Email',
      name: 'contactEmail',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
          .error(`Should be a valid email`),
    },
  ],
};
