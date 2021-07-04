// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import artist from './documents/artist';
import post from './documents/post';
import event from './documents/event';
import siteSettings from './documents/siteSettings';

// object schemas
import social from './objects/social';
import youtubeLink from './objects/youtubeLink';
import image from './objects/image';
import youtubeVideo from './objects/youtubeVideo';
import spotifyAlbum from './objects/spotifyAlbum';
import portableText from './objects/portableText';
import mainEvent from './objects/mainEvent';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    artist,
    post,
    event,
    social,
    youtubeLink,
    image,
    youtubeVideo,
    spotifyAlbum,
    portableText,
    mainEvent,
    siteSettings,
  ]),
});
