export default {
  name: 'singleArtistPage',
  title: 'Single Artist Page',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Press Kit Text',
      name: 'pressKitText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Youtube Headline',
      name: 'youtubeHeadline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Spotify Headline',
      name: 'spotifyHeadline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'CTA Button Text',
      name: 'ctaButtonText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
