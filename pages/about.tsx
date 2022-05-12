import React from 'react'

import Layout from '../lib/components/Layout'
import { Api } from '../lib/api/contentful'
import { GetStaticProps } from 'next'
import { RichText } from '../lib/components/RichText'

export default function Home({aboutFields, instaPosts} : any) {
  const { bio } = aboutFields
  return (
    <Layout>
      <article className="prose">
        <RichText document={bio} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { preview } = ctx;
  const api = new Api({preview});
  const about = await api.getAbout();
  return {
    props: {
      appContext: await api.getGlobalContext(),
      aboutFields: await about?.fields ?? {},
    }
  }
}
