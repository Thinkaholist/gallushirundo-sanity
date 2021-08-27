import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
import {
  FcSettings,
  FcHome,
  FcPhone,
  FcCalendar,
  FcRating,
} from 'react-icons/fc';

export default () =>
  S.list()
    .title('Contents')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(() => <FcHome />)
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Contact Page')
        .icon(() => <FcPhone />)
        .child(
          S.document().schemaType('contactPage').documentId('contactPage')
        ),
      S.listItem()
        .title('Events Page')
        .icon(() => <FcCalendar />)
        .child(S.document().schemaType('eventsPage').documentId('eventsPage')),
      S.listItem()
        .title('Single Artist Page')
        .icon(() => <FcRating />)
        .child(
          S.document()
            .schemaType('singleArtistPage')
            .documentId('singleArtistPage')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'siteSettings',
            'homePage',
            'contactPage',
            'eventsPage',
            'singleArtistPage',
          ].includes(item.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(() => <FcSettings />)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ]);
