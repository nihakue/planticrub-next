import React from 'react'

import Layout from '../../lib/components/layout'
import { Api } from '../../lib/api/contentful'
import { GetStaticProps } from 'next';
import { ServiceCard } from '../../lib/components/ServiceCard';

export default function OnlinePlantingPage({ }) {
  return (
    <Layout>
      <h1 className="typ-h1">Online Planting</h1>
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