// Packages
import * as _ from 'lodash';
import client from '../apollo/apollo-client';
import { gql } from '@apollo/client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Head from 'next/head';

import Cursor from '../components/Cursor'
import Layout from '../components/Layout';
import LeftSideText from '../components/organisms/LeftSideText';
import SocialLinkList from '../components/organisms/SocialLinkList';
import ProjectBlock from '../components/organisms/ProjectBlock';
import ThemeChanger from '../components/organisms/ThemeChanger';


// Fetch Github data (GraphQL)
export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
      query MyQuery {
        user(login: "imkarin") {
          repositories(first: 30, orderBy: {field: CREATED_AT, direction: DESC}, privacy: PUBLIC, ownerAffiliations: OWNER) {
            nodes {
              id
              name
              description
              url
              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
      `,
    });
    
    let repos = _.cloneDeep(data.user.repositories.nodes)
    
    // Remove GitHub tutorial repositories 
    const reposToRemove = ['merge-conflicts', 'community-starter-kit']
    repos = repos.filter(repo => !reposToRemove.includes(repo.name))

    // Add 'topics' array to every repository
    repos.forEach(repo => {
        const topics = []
        repo.repositoryTopics.nodes.forEach(topicsNode => topics.push(topicsNode.topic.name))
        repo.topics = topics
    })

    return {
      props: {
        repos: repos
      },
   };
}

// Home page component
export default function Home({ repos }) {
  // States
  const { theme, setTheme } = useTheme()
  const [hoverState, setHoverState] = useState({
    hovering: false,
    hoverItem: null,
  })

  // Set default theme to dark 
  useEffect(() => {
    setTheme('dark')
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
  
  // Function to update cursor on socialIcon hover
  const hoverLinkHandler = (e) => {
    setHoverState({
      hovering: !hoverState.hovering,
      hoverItem: e.currentTarget
    })
  }

  return (
    <>
      <Head>
        <title>Karin Meijvogel — Creative developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Cursor hoverState = {hoverState} />

        <section className="text">
          <ThemeChanger />
          <LeftSideText title="Hello, I'm /Karin Meijvogel" 
                        text="Creative developer with a passion for data and design.
                        I love learning about technology in all shapes and forms:
                        from front-end to back-end development, from web design to data science." />
          
          <SocialLinkList socials={socials} hoverLinkHandler = { hoverLinkHandler } />
        </section>

        <section className="projects">
            {
            repos.map(repo =>
                <ProjectBlock url={repo.url}
                key={repo.id}
                tags={repo.topics}
                title={repo.name}
                text={repo.description} />
            )
            }
            
        </section>
      </Layout>
    </>
  )
}