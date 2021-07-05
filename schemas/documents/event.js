import React from 'react';
// import { FiCalendar } from 'react-icons/fi';
import { FcPlanner } from 'react-icons/fc';

export default {
  type: 'document',
  name: 'event',
  title: 'Event',
  icon: () => <FcPlanner />,
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
          .max(30)
          .error(`Location name must 30 characters or less.`),
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
        },
      ],
      validation: (Rule) => Rule.unique().min(1),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'cover',
    },
  },
};
