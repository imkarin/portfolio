import Head from 'next/head'
import Layout from '../components/Layout'
import LeftSideText from '../components/organisms/LeftSideText'
import SocialLinkList from '../components/organisms/SocialLinkList'
import ThemeChanger from '../components/organisms/ThemeChanger'


const socials = [{imgSrc: './img/github.png', imgAlt: 'GitHub logo', href: 'https://github.com/imkarin', text: 'GitHub'},
                  {imgSrc: './img/li.png', imgAlt: 'LinkedIn logo', href: 'https://linkedin.com/in/karin-meijvogel', text: 'LinkedIn'}]

export default function Home() {
  return (
    <>
      <Head>
        <title>Karin Meijvogel — Creative developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="text">
          <ThemeChanger />
          <LeftSideText title="Hello, I'm /Karin Meijvogel" 
                        text="Creative developer with a passion for data and design.
                        I love learning about technology in all shapes and forms:
                        from  front-end to back-end development, from web design to data science." />
          
          <SocialLinkList socials={socials} />
        </section>

        <section className="projects">
          {/* Projects here */}
        </section>
      </Layout>
    </>
  )
}
