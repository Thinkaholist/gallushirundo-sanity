import React, { useState } from 'react';
// import { FiMusic } from 'react-icons/fi';
import { FcMusic } from 'react-icons/fc';
import urlBuilder from '@sanity/image-url';
import FormField from 'part:@sanity/components/formfields/default';
import { TextArea } from '@sanity/ui';
import { PatchEvent, set } from 'part:@sanity/form-builder/patch-event';

export function urlFor(source) {
  return urlBuilder({
    projectId: 'q7xlgfk0',
    dataset: 'production',
  }).image(source);
}

const TextWithCounter = React.forwardRef((props, ref) => {
  const { type, onChange, value } = props;
  const [count, setCount] = useState(value?.length || 0);
  const [color, setColor] = useState(value?.length >= 701 ? 'red' : '' || '');
  const [errorText, setErrorText] = useState(
    value?.length >= 701 ? "Sorry, it's too long" : '' || ''
  );

  return (
    <>
      <FormField label={type.title} description={type.description}>
        <TextArea
          type='text'
          rows='14'
          ref={ref}
          placeholder={type.placeholder}
          value={props.value}
          onChange={(event) => {
            onChange(PatchEvent.from(set(event.target.value)));
            setCount(event.target.value.length);
            setColor(count >= 701 ? 'red' : '');
            setErrorText(count >= 701 ? "Sorry, it's too long" : '');
          }}
        />
        <small style={{ color }}>
          {count} / 700{' '}
          {errorText && <span style={{ color: 'red' }}>{errorText}</span>}
        </small>
      </FormField>
    </>
  );
});

export default {
  type: 'document',
  name: 'artist',
  title: 'Artist',
  icon: () => <FcMusic />,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the band.',
      validation: (Rule) =>
        Rule.required()
          .max(40)
          .error(`Name of the band should 40 characters or less.`),
    },
    {
      name: 'slug',
      title: 'URL identifier (slug)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text',
      inputComponent: TextWithCounter,
      description: 'artist bio (Max. 700 characters)',
      rows: 3,
      validation: (Rule) =>
        Rule.required().max(700).error(`Bio should 700 characters maximum`),
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Logo of the artist (SVG or PNG)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'imageWithInfo',
    },
    {
      title: 'Image Gallery',
      name: 'imageGallery',
      type: 'array',
      of: [{ type: 'imageWithInfo' }],
    },
    {
      title: 'Video Gallery',
      name: 'videoGallery',
      description: 'Please enter YouToube links',
      type: 'array',
      of: [
        {
          title: 'YouTube link',
          name: 'youtubeLink',
          type: 'youtubeLink',
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(3),
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'social',
    },
    {
      title: 'Agencies',
      name: 'agencies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'agency' }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: 'pressKit',
      title: 'Press kit',
      type: 'file',
      description: 'Only .zip file will be accepted',
      options: {
        storeOriginalFilename: true,
        accept: 'application/zip',
      },
      // validation: (Rule) =>
      //   Rule.custom((file) => {
      //     if (!file) return true;
      //     return file.asset.extension === 'zip';
      //   }).error(`File should be a .zip!`),
    },
    {
      title: 'Tagline',
      name: 'tagline',
      type: 'text',
      description: 'A sentence tagline about the artist (Max. 242 characters)',
      rows: 4,
      validation: (Rule) =>
        Rule.required().max(242).error(`Tagline should 242 characters maximum`),
    },
    {
      title: 'Styles',
      name: 'styles',
      type: 'styles',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
    prepare(selection) {
      const { title, media } = selection;

      return {
        title: title,
        // subtitle: title,
        media: (
          <div
            style={{
              // border: '1px solid rebeccapurple',
              // borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              width: 50,
              height: 38,
            }}
          >
            <img src={urlFor(media.asset._ref)} alt='logo' width='98%' />
          </div>
        ),
      };
    },
  },
};
