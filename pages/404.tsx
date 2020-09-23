import React from 'react'
import Layout from '../lib/components/Layout'
import { Api } from '../lib/api/contentful'
import { GetStaticProps } from 'next'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
  </Layout>
)

export default NotFoundPage

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { preview } = ctx;
  const api = new Api({preview});
  return {
    props: {
      appContext: await api.getGlobalContext()
    }
  }
}