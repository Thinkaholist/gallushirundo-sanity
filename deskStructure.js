import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
// import { FiSettings } from 'react-icons/fi';
import { FcSettings } from 'react-icons/fc';

export default () =>
  S.list()
    .title('Contents')
    .items([
      ...S.documentTypeListItems().filter(
        (item) => !['siteSettings'].includes(item.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .icon(() => <FcSettings />)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ]);
