import React from 'react'

import Layout from '../../lib/components/Layout'
import { Api } from '../../lib/api/contentful'
import { GetStaticProps } from 'next';
import { RichText } from '../../lib/components/RichText';
import Head from 'next/head';

export default function GardenDesignPage({ page }) {
  const { title, body } = page;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="typ-h1">{title}</h1>
      <article className="prose">
        <RichText document={body} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { preview } = ctx;
  const api = new Api({ preview });
  return {
    props: {
      appContext: await api.getGlobalContext(),
      page: await api.getOnlinePlantingPage()
    }
  }
}