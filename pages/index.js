import { Client } from '../utils/prismicHelpers'
import { RichText } from 'prismic-reactjs'
import SliceZone from "next-slicezone"
import * as Slices from "../slices"

const resolver = ({ sliceName }) => Slices[sliceName]

const Home = ({data}) => {

  if(data) {
    return (
      <div>
        <RichText render={data.title}/>
        <RichText render={data.text} />
        {data.slices.length > 0 && 
          <SliceZone slices={data.slices} resolver={resolver} />
        }
      </div>
    )
  }

  return (
    <>
      <h1>Couldn´t load data!</h1>
    </>
  )
}

export async function getStaticProps() {
  const doc = await Client().getSingle('homepage')

  return {
    props: {
      data: doc?.data ? doc?.data : ''
    }
  }
}

export default Home
