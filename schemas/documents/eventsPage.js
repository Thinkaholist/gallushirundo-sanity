export default {
  name: 'eventsPage',
  title: 'Events Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Event (ticket) info button text',
      name: 'eventInfo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Past Events Button Text',
      name: 'pastEvents',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Upcoming Events Button Text',
      name: 'upcomingEvents',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
