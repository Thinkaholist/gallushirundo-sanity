import React from 'react';
import { urlFor } from '../documents/artist';

function ImagePreview(props) {
  const imageId = props.value?.image?.image?.asset?._ref.slice(6, -4);
  // const ext = props.value?.image?.image?.asset?._ref.slice(-3);
  const ext = props.value?.image?.image?.asset?._ref.split('-').at(-1);
  const imageLink = `https://cdn.sanity.io/images/q7xlgfk0/production/${imageId}.${ext}`;

  return (
    <>
      <div>
        <img
          src={imageLink}
          style={{
            display: 'block',
            width: '100%',
            height: 300,
            objectFit: 'contain',
          }}
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
