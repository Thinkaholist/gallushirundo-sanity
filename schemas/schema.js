// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import artist from './documents/artist';
import post from './documents/post';
import event from './documents/event';
import siteSettings from './documents/siteSettings';
import agency from './documents/agency';
import category from './documents/category';
import homePage from './documents/homePage';
import contactPage from './documents/contactPage';
import eventsPage from './documents/eventsPage';
import singleArtistPage from './documents/singleArtistPage';

// object schemas
import social from './objects/social';
import youtubeLink from './objects/youtubeLink';
import imageWithInfo from './objects/imageWithInfo';
import youtubeVideo from './objects/youtubeVideo';
import spotifyAlbum from './objects/spotifyAlbum';
import spotifyTrack from './objects/spotifyTrack';
import portableText from './objects/portableText';
import mainEvent from './objects/mainEvent';
import imageEmbed from './objects/imageEmbed';
// import instagramEmbed from './objects/instagramEmbed';
import eventEmbed from './objects/eventEmbed';
import postEmbed from './objects/postEmbed';
import artistEmbed from './objects/artistEmbed';
import styles from './objects/styles';

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
    imageWithInfo,
    youtubeVideo,
    spotifyAlbum,
    spotifyTrack,
    portableText,
    mainEvent,
    siteSettings,
    imageEmbed,
    // instagramEmbed,
    eventEmbed,
    postEmbed,
    artistEmbed,
    agency,
    category,
    homePage,
    styles,
    contactPage,
    eventsPage,
    singleArtistPage,
  ]),
});
