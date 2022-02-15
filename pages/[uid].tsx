import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { Client } from '@/utils/prismicHelpers'
import { queryRepeatableDocuments } from '@/utils/queries'
import { RichText } from 'prismic-reactjs'

const Page: NextPage = ({data}: any) => {

    if(data) {
        return (
            <>
                <RichText render={data.title} />
                <RichText render={data.text} />
            </>
        )
    }

    return (
        <>
            <h1>Couldn´t load data!</h1>
        </>
    )
}

export async function getStaticProps({params}) {
    const doc = await Client().getByUID("pages", params.uid) || []

    return {
        props: {
            data: doc.data
        }
    }
}

export async function getStaticPaths() {
    const documents = await queryRepeatableDocuments((doc: any) => doc.type === 'pages')

    return {
        paths: documents.map(doc => `/${doc.uid}`),
        fallback: false
    }
}

export default Page