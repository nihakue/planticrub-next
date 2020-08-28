import React from 'react'

import Layout from '../lib/components/layout'
import Testimonials from '../lib/components/testimonials'
import { Api } from '../lib/api'
import { GetStaticProps } from 'next'

const TestimonialsPage = ({testimonials}) => (
  <Layout>
    <h1>Testimonials</h1>
    <Testimonials testimonials={testimonials} />
  </Layout>
)

export default TestimonialsPage

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { preview } = ctx;
  const api = new Api({preview});
  return {
    props: {
      ...(await api.getGlobalContext()),
      testimonials: await api.getTestimonials()
    }
  }
}