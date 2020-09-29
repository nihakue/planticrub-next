import React from 'react'

import Layout from '../lib/components/Layout'
import { Api } from '../lib/api/contentful'
import { GetStaticProps } from 'next';
import { RichText } from '../lib/components/RichText';

export default function ProjectsPage({ projects }) {
  return (
    <Layout>
      <h1 className="typ-h1">My Projects</h1>
      <div className="flex flex-col mx-auto w-full justify-center stack-2">
        {projects.length === 0 && <h2 className="text-center font-semibold text-lg">No projects found</h2>}
        {projects.map((project) => {
          const { title, media, date, description } = project.fields;
          return(
            <section className="flex flex-col w-full items-center stack-1" key={project.sys.id}>
              <div className="text-center">
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="font-normal text-sm">{new Date(date).toLocaleDateString('en-uk', {
                  month: 'long',
                  year: 'numeric'
                })}</p>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full">
                {media?.map(im => <div style={{backgroundImage: `url(${im.fields.file.url})`, height: '22vw'}} className="bg-clip-border bg-cover bg-center w-full" key={im.sys.id} />)}
              </div>
              <article className="text-lg font-light">
                <RichText document={description} />
              </article>
            </section>
          )
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
      projects: await api.getProjects()
    }
  }
}