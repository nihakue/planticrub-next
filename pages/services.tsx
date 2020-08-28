import React from 'react'

import Layout from '../lib/components/layout'
import Services from '../lib/components/services'
import { Api } from '../lib/api';
import { GetStaticProps } from 'next';

export default function ServicesPage({services}){
  return (
  <Layout>
    <h1>My Services</h1>
    <Services services={services}/>
  </Layout>
)}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { preview } = ctx;
  const api = new Api({preview});
  return {
    props: {
      ...(await api.getGlobalContext()),
      services: await api.getServices()
    }
  }
}