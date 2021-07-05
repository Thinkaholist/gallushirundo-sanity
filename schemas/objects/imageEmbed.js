import React from 'react';
import { urlFor } from '../documents/artist';

function ImagePreview({ value: { image } }) {
  return (
    <>
      <div>
        <img
          src={urlFor(image?.asset)}
          alt={image?.altText}
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {image?.caption && <small>{image.caption}</small>}
      </div>
    </>
  );
}

export default {
  title: 'Image Embed',
  name: 'imageEmbed',
  type: 'object',
  fields: [
    {
      title: 'Image Embed',
      name: 'imageEmbed',
      type: 'imageWithInfo',
    },
  ],
  preview: {
    select: {
      image: 'imageEmbed',
    },
    component: ImagePreview,
  },
};
