import React from 'react';
import { FcRedo } from 'react-icons/fc';

export default {
  title: 'Redirect',
  name: 'redirect',
  type: 'document',
  icon: () => <FcRedo />,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'From',
      name: 'fromPath',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'To',
      name: 'toPath',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Permanent',
      name: 'permanent',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    },
  ],
};
