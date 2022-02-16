import React from 'react'
import { RichText } from 'prismic-reactjs'

const Title = ({ slice }) => (
  <section className="m-12 text-center">
    <div className="border-b-2 text-2xl lg:text-4xl">
      {slice.primary.title ? <RichText render={slice.primary.title}/> : <h2>Template slice, update me!</h2>}
    </div>
    <div className="text-md lg:text-2xl">
      {slice.primary.subtitle ? <RichText render={slice.primary.subtitle}/> : <p>start by editing this slice from inside Prismic builder!</p>}
    </div>
  </section>
)

export default Title