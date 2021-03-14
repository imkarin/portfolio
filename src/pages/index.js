import Head from 'next/head'
import Layout from '../components/Layout'
import LeftSideText from '../components/organisms/LeftSideText'

export default function Home() {
  return (
    <>
      <Head>
        <title>Karin Meijvogel - Creative developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="text">
          <LeftSideText title="Hoi, ik ben /Karin Meijvogel" 
                        text="Ik ben een creative developer met een passie voor data en design.
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
                        dolor sit amet." />
        </section>

        <section className="projects">
          {/* Projects here */}
        </section>
      </Layout>
    </>
  )
}
