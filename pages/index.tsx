import React from 'react'

import Layout from '../lib/components/Layout'
import { Api } from '../lib/api/contentful'
import { GetStaticPaths, GetStaticProps } from 'next'
import { RichText } from '../lib/components/RichText'
import { InstaFeed } from '../lib/components/InstaFeed'

export default function Home({landingFields, instaPosts} : any) {
  const { title, subtitle, splash } = landingFields ?? {}
  return (
    <Layout>
      <div className="stack-2 py-4">
        <section className="flex justify-center lg:justify-between stack-1 items-center flex-wrap">
          <div style={{minWidth: '200px'}}className="flex flex-col mr-10 flex-1">
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="font-light">
              <RichText document={subtitle} />
            </div> 
          </div>
          {instaPosts && <InstaFeed posts={instaPosts} />}
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
      landingFields: await landing?.fields,
      instaPosts: (await api.getInstagram()) ?? null,
    },
    revalidate: 10
  }
}