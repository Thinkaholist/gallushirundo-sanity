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
          .max(60)
          .error(`Title of the event should 60 characters or less.`),
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
      description: 'eg. Warsaw, Poland',
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
      title: 'Main Event',
      name: 'mainEvent',
      type: 'mainEvent',
    },
    {
      title: 'Related Artist(s)',
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
