export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
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
