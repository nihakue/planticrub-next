import React from 'react'

import Layout from '../../lib/components/Layout'
import { Api } from '../../lib/api/contentful'
import { GetStaticProps } from 'next';

export default function OnlinePlantingPage({ }) {
  return (
    <Layout>
      <h1 className="typ-h1">Online Planting</h1>
      <p className="font-light">
        This content is still being written.
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { preview } = ctx;
  const api = new Api({ preview });
  return {
    props: {
      appContext: await api.getGlobalContext()
    }
  }
}