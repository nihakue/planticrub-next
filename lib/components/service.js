import React from 'react'

import './service.module.css'

export default function Service({ title, description, image }) {
  return (
    <section className="service">
      <img alt={title} src={image} />
      <div className="body">
        <h2>{title}</h2> <p>{description}</p>
      </div>
    </section>
  )
}
