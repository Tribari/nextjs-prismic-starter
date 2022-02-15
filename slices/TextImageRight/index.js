import React from 'react'
import { RichText } from 'prismic-reactjs'

const TextImageRight = ({ slice }) => (
  <div className={slice.variation}>
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    <RichText render={slice.primary.title} />
   </div>
)

export default TextImageRight