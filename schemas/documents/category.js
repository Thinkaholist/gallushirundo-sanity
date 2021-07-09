import React from 'react';
import { FcBookmark } from 'react-icons/fc';

export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  icon: () => <FcBookmark />,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
  ],
};
