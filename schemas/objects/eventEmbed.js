import React from 'react';
import usePromise from 'react-use-promise';
import { client } from '../../src/client';

function PostEmbed(props) {
  const postId = props?.value?.post?._ref;

  const query = `*[_id == $postId][0]`;

  const [result, error, state] = usePromise(
    () => client.fetch(query, { postId }),
    []
  );

  return (
    <>
      {result && (
        <>
          <div style={{ border: '1px solid', padding: 10 }}>
            <h3>{result.title}</h3>
            <p>{result.publishedDate}</p>
          </div>
        </>
      )}
    </>
  );
}

export default {
  title: 'Post embed',
  name: 'postEmbed',
  type: 'object',
  fields: [
    {
      title: 'post',
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }],
    },
  ],
  preview: {
    select: {
      post: 'post',
    },
    component: PostEmbed,
  },
};
