import React from 'react';
import { FcBusinessContact } from 'react-icons/fc';

export default {
  title: 'Agency',
  name: 'agency',
  type: 'document',
  icon: () => <FcBusinessContact />,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the agency.',
      validation: (Rule) =>
        Rule.required()
          .max(40)
          .error(`Name of the band should 40 characters or less.`),
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Logo of the agency',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Website',
      name: 'website',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri(['http', 'https']).error(`Should be a valid URL`),
    },
  ],
};
