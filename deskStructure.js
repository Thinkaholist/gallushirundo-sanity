import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
import { FcSettings, FcHome } from 'react-icons/fc';

export default () =>
  S.list()
    .title('Contents')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(() => <FcHome />)
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['siteSettings', 'homePage'].includes(item.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(() => <FcSettings />)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ]);
