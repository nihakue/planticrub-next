import React from 'react'

import Layout from '../lib/components/layout'
import Services from '../lib/components/services'

const ServicesPage = ({services}) => (
  <Layout>
    <h1>My Services</h1>
    <Services services={services}/>
  </Layout>
)

export default ServicesPage

export const getStaticProps = (ctx) => {
  return {
    props: {
      services: [
        {
          "title": "Design and quote",
          "description": "After completing your design and planting list I will bring the work back to you to discuss, I will also bring back a quote to source all materials and to have the whole design installed. Any changes you want will be agreed at this stage and if you want to go ahead and we can discuss dates for installation.",
          "image": "/img/quote.jpg",
          "step": 2
        }
      ]
    }
  }
}