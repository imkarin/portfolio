// Packages
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import LeftSideText from '../components/organisms/LeftSideText'
import SocialLinkList from '../components/organisms/SocialLinkList'
import ProjectBlock from '../components/organisms/ProjectBlock'
import ThemeChanger from '../components/organisms/ThemeChanger'

// Octokit (github) rest api package
const { Octokit } = require('@octokit/rest')
const octokit = new Octokit()


// Home apge
export default function Home() {
  const { theme, setTheme } = useTheme()

  // Fetch Github data
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means this useEffect will run once similar to componentDidMount()
  useEffect(() => {
    octokit.rest.repos.listForUser({   // fetch all repos
      username: 'imkarin',
    })
    .then((res) => {
      setItems(res.data)
    }, 

    // Note: it's important to handle errors here instead of a catch() block so that we don't swallow exceptions from actual bugs in components.
    (error) => {
      setError(error);  
    })
    
    // // then fetch labels for every repo
    // .then(() => {
    //   data.forEach(async (item) => {
    //     item.labels = await octokit.rest.repos.getAllTopics({
    //     owner: 'imkarin',
    //     repo: item.name
    //     }).then(r => r.data.names)
    //   })      
    // })
    
  }, [])


  // Social link images
  const socials = [{imgSrc: `./img/github${theme === 'light' ? '' : '-white'}.png`,   // '-white' img in darkmode
                    imgAlt: 'GitHub logo', 
                    href: 'https://github.com/imkarin', 
                    text: 'GitHub'},
                  
                   {imgSrc: `./img/li${theme === 'light' ? '' : '-white'}.png`,
                    imgAlt: 'LinkedIn logo', 
                    href: 'https://linkedin.com/in/karin-meijvogel', 
                    text: 'LinkedIn'}]

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
                        from front-end to back-end development, from web design to data science." />
          
          <SocialLinkList socials={socials} />
        </section>

        {/* { items.forEach(item => {console.log('onder', item.labels)}) } */}

        <section className="projects">
          {items.map(item =>
            <ProjectBlock url={item.html_url}
                          key={item.id}
                          tags={item.labels}
                          title={item.name}
                          text={item.description} />)}
        </section>
      </Layout>
    </>
  )
}
