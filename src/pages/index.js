import Head from 'next/head'
import Layout from '../components/Layout'
import TextBlock from '../components/molecules/TextBlock'

export default function Home() {
  return (
    <>
      <Head>
        <title>Karin Meijvogel - Creative developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <TextBlock titleSize="1" 
                     title="Hoi, ik ben /Karin Meijvogel" 
                     text="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
                     Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet." />
      </Layout>
    </>
  )
}
