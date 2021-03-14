import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Karin Meijvogel - Creative developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <h1>Hoi, ik ben <span>Karin Meijvogel</span></h1>
          <p>Welcome to my portfolio.</p>
      </Layout>
    </>
  )
}
