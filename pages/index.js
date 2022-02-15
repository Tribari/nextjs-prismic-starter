import { Client } from '../utils/prismicHelpers'
import { RichText } from 'prismic-reactjs'

const Home = ({data}) => {

  if(data) {
    return (
      <div>
        <RichText render={data.title} />
        <RichText render={data.text} />
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
