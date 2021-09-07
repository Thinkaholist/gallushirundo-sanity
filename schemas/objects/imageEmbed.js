import React from 'react';
import { urlFor } from '../documents/artist';

function ImagePreview(props) {
  return (
    <>
      <div>
        <img
          src={urlFor(props?.value?.image?.image?.asset)}
          alt={props?.value?.image?.altText}
          style={{ width: '80%', display: 'block', margin: '0 auto' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {props?.value?.image?.caption && (
          <small>{props?.value?.image.caption}</small>
        )}
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
