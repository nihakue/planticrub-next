import React from 'react'

import Service from './service'

export default function Services({services}) {
  return services.map(service => {
    const { title, description, image } = service
    return (
      <Service
        key={title}
        title={title}
        description={description}
        image={image}
      />
    )
  })
}
