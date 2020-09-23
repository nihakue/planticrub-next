import React from 'react';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';

const options: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return <img src={`${node.data.target.fields.file.url}?fm=jpg&fl=progressive&w=600`} />
    }
  }
}

export function RichText({document}: {document: any}) {
  return (
  <>
    {documentToReactComponents(document, options)}
  </>
  )
}