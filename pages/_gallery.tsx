import React from 'react'

import Layout from '../lib/components/layout'
import Gallery from '../lib/components/gallery'
import { Api } from '../lib/api/contentful'
import { GetStaticProps } from 'next'

const GalleryPage = () => (
  <Layout>
    <h1>Previous Work</h1>
    <Gallery />
  </Layout>
)

export default GalleryPage

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { preview } = ctx;
  const api = new Api({preview});
  return {
    props: {
      appContext: await api.getGlobalContext(),
      gallery: await api.getGallery()
    }
  }
}