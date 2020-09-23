import React from 'react'

import Layout from '../lib/components/Layout'
import { Api } from '../lib/api/contentful'
import { GetStaticProps } from 'next';
import { ServiceCard } from '../lib/components/ServiceCard';

export default function ServicesPage({ services }) {
  return (
    <Layout>
      <h1 className="typ-h1">My Services</h1>
      <div className="flex flex-wrap mx-auto w-full justify-around">
        {services.map((service) => {
          const { slug, image, title, description } = service.fields;
          return <ServiceCard key={service.sys.id} href={`/services/${slug}`} bg={image.fields.file.url} title={title} description={description} />
        })}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { preview } = ctx;
  const api = new Api({ preview });
  return {
    props: {
      appContext: await api.getGlobalContext(),
      services: await api.getServices()
    }
  }
}