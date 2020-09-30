import React from 'react'

import Layout from '../lib/components/Layout'
import { Api } from '../lib/api/contentful'
import { GetStaticPaths, GetStaticProps } from 'next'
import { RichText } from '../lib/components/RichText'

export default function Home({landingFields} : any) {
  const { title, subtitle, splash } = landingFields ?? {}
  return (
    <Layout>
      <div className="stack-2 py-4">
        <section className="flex justify-center lg:justify-between stack-1 items-center flex-wrap">
          <div className="flex flex-col md:mr-10">
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="font-light">
              <RichText document={subtitle} />
            </div> 
          </div>
          <div className="rounded w-3/5 max-w-xl bg-clip-border bg-cover bg-center" style={{minWidth: '400px', height: '400px', backgroundImage: `url(${splash.fields.file.url}?fl=progressive&h=400)`}}>
          </div>
        </section>
      </div>
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
      landingFields: await landing?.fields
    }
  }
}