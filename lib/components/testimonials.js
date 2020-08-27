import React from 'react'

export default function Services({testimonials}) {
  const blocks = testimonials
    .sort((a, b) => b.year - a.year)
    .map(testimonial => {
      const { author, quote, city, year } = testimonial
      return (
        <>
          <blockquote>
            {quote}
            <footer>{`— ${author}, ${city}, ${year}`}</footer>
          </blockquote>
        </>
      )
    })
  return blocks
}