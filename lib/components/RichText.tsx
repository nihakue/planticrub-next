import React from 'react';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const options = {

}

export function RichText({document}: {document: any}) {
  return (
  <>
    {documentToReactComponents(document, options)}
  </>
  )
}