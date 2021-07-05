import React from 'react';
// import { FiMusic } from 'react-icons/fi';
import { FcMusic } from 'react-icons/fc';
import urlBuilder from '@sanity/image-url';

export function urlFor(source) {
  return urlBuilder({
    projectId: 'q7xlgfk0',
    dataset: 'production',
  }).image(source);
}

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
      title: 'Featured video',
      name: 'featuredVideo',
      type: 'youtubeLink',
      description: 'URL should be a Youtube URL',
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
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'social',
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
