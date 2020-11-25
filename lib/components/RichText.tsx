import React from 'react';

import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';

const options: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const src = node?.data?.target?.fields?.file?.url;
      if (!src) {
        return null;
      }
      return <img src={`${src}?fm=jpg&fl=progressive&w=600`} />
    },
    [INLINES.HYPERLINK]: (node, children) => <Link href={node?.data?.uri ?? '#'}><a className="hover:underline text-blue-500">{children}</a></Link>
  }
}

export function RichText({document}: {document: any}) {
  return (
  <>
    {documentToReactComponents(document, options)}
  </>
  )
}