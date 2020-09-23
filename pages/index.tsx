import React from 'react'

import Layout from '../lib/components/Layout'
import { Api } from '../lib/api/contentful'
import { GetStaticPaths, GetStaticProps } from 'next'
import { RichText } from '../lib/components/RichText'

export default function Home({body}: any) {
  return (
    <Layout>
      <article className="prose prose-xl">
        <RichText document={body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { preview } = ctx;
  const api = new Api({preview});
  const landing = await api.getLandingPage();
  return {
    props: {
      appContext: await api.getGlobalContext(),
      body: await landing?.fields?.body
    }
  }
}