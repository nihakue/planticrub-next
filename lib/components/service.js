import React from 'react'

import './service.module.css'

export default function Service({ title, description, image }) {
  const baseImageSrc = image.fields.file?.url
  const imageSrc = `${baseImageSrc}?w=500`
  return (
    <section className="service">
      {baseImageSrc && <img alt={title} src={imageSrc} />}
      <div className="body">
        <h2>{title}</h2> <p>{description}</p>
      </div>
    </section>
  )
}
