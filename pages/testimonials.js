import React from 'react'
// import fs from 'fs'
// import path from 'path'

import Layout from '../lib/components/layout'
import Testimonials from '../lib/components/testimonials'

const TestimonialsPage = ({testimonials}) => (
  <Layout>
    <h1>Testimonials</h1>
    <Testimonials testimonials={testimonials} />
  </Layout>
)

export default TestimonialsPage

export const getStaticProps = async (ctx) => {
  // const testimonialsDir = path.join(process.cwd(), '/content/testimonials');
  // const filenames = fs.readdirSync(testimonialsDir);
  // const testimonials = await Promise.all(filenames.map(async f => {
  //   return await import(path.join(testimonialsDir, f));
  // }));

  return {
    props: {
      testimonials: [
        {
          "author": "Alex Black",
          "quote": "Robyn came highly recommended and she way exceeded my hopes. She is a pleasure to work with and the creative understanding she brings to projects is enormous. We shared a Pinterest board and after sending only one set of images, Robyn instantly understood my style of garden and grasped my “floral aesthetic” very accurately. She sent visual suggestions of flowers to include in the herbaceous border I was creating and her suggestions showed that she had absolutely understood my taste in flowers. Her wide and detailed horticultural knowledge enabled her to advise very precisely which plants/flowers would flourish in which environments. I very much appreciated her sensitivity to the design, but I was also grateful how keenly aware of budget she was. Robyn recommended the best way to approach the brief while using my budget cleverly. When planting, she has laid out my plants perfectly with a view to how they will grow in the coming years - not to how they looked as they went into the ground. She is a patient and sensitive landscaper and I look forward to working with her again.",
          "city": "Edinburgh",
          "year": 2017
        }
      ]
    }
  }
}