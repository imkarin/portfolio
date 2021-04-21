import client from '../apollo/apollo-client'
import { gql } from '@apollo/client';

// Fetch Github data (GraphQL)
export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
      query MyQuery {
        user(login: "imkarin") {
          repositories(first: 30, orderBy: {field: CREATED_AT, direction: DESC}, privacy: PUBLIC) {
            nodes {
              id
              name
              description
              projectsUrl
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

    return {
      props: {
        repos: data.user.repositories.nodes
      },
   };
}

// Test page
export default function test({ repos }) {
    return (
        <ul>
            {console.log(repos)}
            {repos.map(repo => (
                <li key={repo.id}>{repo.name}</li>
            ))}
        </ul>
    )
}
