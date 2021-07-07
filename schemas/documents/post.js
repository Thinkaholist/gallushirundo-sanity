import React, { useState } from 'react';
// import { FiPenTool } from 'react-icons/fi';
import { FcDocument } from 'react-icons/fc';
// Important items to allow form fields to work properly and patch the dataset.
import { PatchEvent, set } from 'part:@sanity/form-builder/patch-event';
import FormField from 'part:@sanity/components/formfields/default';
// Import the TextArea from UI
import { TextArea } from '@sanity/ui';

const TextWithCounter = React.forwardRef((props, ref) => {
  const { type, onChange, value } = props;
  const [count, setCount] = useState(value?.length || 0);
  const [color, setColor] = useState(value?.length >= 141 ? 'red' : '' || '');
  const [errorText, setErrorText] = useState(
    value?.length >= 141 ? "Sorry, it's too long" : '' || ''
  );

  return (
    <>
      <FormField label={type.title} description={type.description}>
        <TextArea
          type='text'
          rows='3'
          ref={ref}
          placeholder={type.placeholder}
          value={props.value}
          onChange={(event) => {
            onChange(PatchEvent.from(set(event.target.value)));
            setCount(event.target.value.length);
            setColor(count >= 141 ? 'red' : '');
            setErrorText(count >= 141 ? "Sorry, it's too long" : '');
          }}
        />
        <small style={{ color }}>
          {count} / 140{' '}
          {errorText && <span style={{ color: 'red' }}>{errorText}</span>}
        </small>
      </FormField>
    </>
  );
});

export default {
  type: 'document',
  name: 'post',
  title: 'Post',
  icon: () => <FcDocument />,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
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
      title: 'Published date',
      name: 'publishedDate',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'imageWithInfo',
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
      inputComponent: TextWithCounter,
      description:
        'A short summary of what is this article about (Max. 140 characters)',
      rows: 3,
      validation: (Rule) =>
        Rule.required().max(140).error(`Excerpt should 140 characters maximum`),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'portableText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt',
      media: 'featuredImage',
    },
  },
};
