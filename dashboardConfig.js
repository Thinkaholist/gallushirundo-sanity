export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    // },
    {
      name: 'document-list',
      options: {
        title: 'Upcoming Events',
        query: '*[_type == "event" && date >= $now] | order(date asc) [0...10]',
      },
      layout: {
        width: 'medium',
        height: 'auto',
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Last Edited Documents',
        order: '_updatedAt desc',
        types: ['post', 'event', 'artist'],
      },
      layout: {
        width: 'medium',
        height: 'auto',
      },
    },
    {
      name: 'project-users',
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
    {
      name: 'project-info',
      layout: {
        width: 'medium',
        height: 'auto',
      },
    },
    {
      name: 'cats',
      layout: {
        width: 'small',
        height: 'auto',
      },
    },
  ],
};
