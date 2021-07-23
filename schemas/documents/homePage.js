export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageWithInfo',
    },
    {
      name: 'headerText',
      title: 'Header text',
      type: 'text',
    },
  ],
};
