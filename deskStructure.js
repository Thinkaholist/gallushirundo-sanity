import S from '@sanity/desk-tool/structure-builder';
import React from 'react';
import { FiSettings } from 'react-icons/fi';

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
        .icon(() => <FiSettings />)
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
    ]);
