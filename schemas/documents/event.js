export default {
  type: 'document',
  name: 'event',
  title: 'Event',
  icon: () => '📅',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the Event.',
      validation: (Rule) =>
        Rule.required()
          .max(40)
          .error(`Title of the event should 40 characters or less.`),
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .max(20)
          .error(`Location name must 20 characters or less.`),
    },
    {
      title: 'Cover image',
      name: 'cover',
      type: 'imageWithInfo',
    },
    {
      name: 'artists',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'artist' }],
          options: {
            filter: 'published == $published',
            filterParams: { published: true },
          },
        },
      ],
      validation: (Rule) => Rule.unique().min(1),
    },
  ],
};
